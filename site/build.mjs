import { execFileSync } from 'node:child_process';
import { cpSync, mkdirSync, mkdtempDisposableSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const [marpArgument, outputArgument] = process.argv.slice(2);
if (!marpArgument || !outputArgument) {
  console.error('Usage: node site/build.mjs <marp-cli.js> <output-directory>');
  process.exit(1);
}

const repo = fileURLToPath(new URL('../', import.meta.url));
const marpCli = resolve(marpArgument);
const output = resolve(outputArgument);
using temporarySources = mkdtempDisposableSync(join(tmpdir(), 'abas-marp-'));
const staging = temporarySources.path;
const slidesDirectory = join(output, 'slides');

const topicFolders = readdirSync(repo, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && /^\d+ тема$/u.test(entry.name))
  .map((entry) => ({ folder: entry.name, number: Number.parseInt(entry.name, 10) }))
  .sort((left, right) => left.number - right.number);

if (topicFolders.length === 0) throw new Error('No numbered topic folders found');

function copyDeck(source, target, url) {
  const markdown = readFileSync(source, 'utf8');
  if (!/^marp:\s*true\s*$/m.test(markdown)) throw new Error(`Marp directive missing in ${source}`);

  const heading = markdown.match(/^#\s+(.+?)\s*$/m)?.[1];
  if (!heading) throw new Error(`Slide title missing in ${source}`);

  const metadata = markdown.match(/^title:\s*(.+)$/m)?.[1].trim().replace(/^["']|["']$/g, '');
  mkdirSync(target, { recursive: true });
  writeFileSync(join(target, `${url.split('/').at(-1)}.md`), markdown);
  return { heading, shortTitle: metadata?.split(' | ')[0] ?? heading, url: `slides/${url}` };
}

const topics = topicFolders.map(({ folder, number }) => {
  const source = join(repo, folder);
  const topic = `topic-${number}`;
  const target = join(staging, topic);
  const overview = copyDeck(join(source, 'presentation.marp.md'), target, `${topic}/overview`);
  const lectures = readdirSync(join(source, 'lectures'))
    .filter((name) => name.endsWith('.marp.md'))
    .sort()
    .map((name) => copyDeck(
      join(source, 'lectures', name),
      join(target, 'lectures'),
      `${topic}/lectures/${name.slice(0, -'.marp.md'.length)}`,
    ));
  return { number, overview, lectures };
});

const browser = process.env.MARP_BROWSER_PATH;
const outputArgs = ['--input-dir', staging, '--output', slidesDirectory];
const run = (args) => execFileSync(process.execPath, [marpCli, ...outputArgs, ...args], { stdio: 'inherit' });

mkdirSync(slidesDirectory, { recursive: true });
run([]);
run([
  '--pptx', '--image-scale', '1.4', '--no-parallel', '--browser-timeout', '60',
  ...(browser ? ['--browser-path', browser] : []),
]);

const decks = topics.flatMap(({ overview, lectures }) => [overview, ...lectures]);
for (const deck of decks) {
  for (const extension of ['html', 'pptx']) {
    const file = join(output, `${deck.url}.${extension}`);
    if (statSync(file).size === 0) throw new Error(`Empty export: ${file}`);
  }
}

const html = (text) => text.replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character]);

const toc = topics.map(({ number, overview }) =>
  `<li><a href="#topic-${number}">${html(overview.shortTitle)}</a></li>`).join('\n');

const sections = topics.map(({ number, overview, lectures }) => `
  <section class="topic" id="topic-${number}" aria-labelledby="title-${number}">
    <h2 id="title-${number}">${html(overview.heading)}</h2>
    <div class="overview">
      <a class="primary" href="${html(overview.url)}.html" aria-label="Открыть обзор «${html(overview.heading)}»">Открыть слайды</a>
      <a class="download" href="${html(overview.url)}.pptx" download aria-label="Скачать обзор «${html(overview.heading)}» в PPTX">Скачать PPTX</a>
    </div>
    <details>
      <summary>Лекции <span class="lecture-count">${lectures.length}</span></summary>
      <ol class="lectures">
        ${lectures.map((lecture) => `
        <li>
          <a href="${html(lecture.url)}.html">${html(lecture.heading)}</a>
          <a class="download" href="${html(lecture.url)}.pptx" download aria-label="Скачать лекцию «${html(lecture.heading)}» в PPTX">PPTX</a>
        </li>`).join('')}
      </ol>
    </details>
  </section>`).join('\n');

const template = readFileSync(new URL('index.html', import.meta.url), 'utf8');
const index = template
  .replace('<!-- course-navigation -->', () => toc)
  .replace('<!-- course-sections -->', () => sections);
writeFileSync(join(output, 'index.html'), index);
cpSync(new URL('style.css', import.meta.url), join(output, 'style.css'));
console.log(`Built ${decks.length} HTML slide decks and ${decks.length} PowerPoint downloads.`);
