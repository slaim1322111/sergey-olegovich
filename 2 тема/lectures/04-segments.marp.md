---
marp: true
theme: default
size: 16:9
paginate: true
title: Сегментация удалённого доступа
style: |
  section { background: #f5f8fc; color: #17283d; font-family: 'Segoe UI', sans-serif; font-size: 31px; padding: 70px 80px; }
  h1, h2 { color: #103c61; }
  h1 { font-size: 52px; }
  h2 { font-size: 43px; }
  strong { color: #006878; }
  li { margin-block: 0.44em; }
  section.cover { background: #10283c; color: #eaf6ff; }
  section.cover h1, section.cover h2, section.cover strong { color: #eaf6ff; }
---

# Потоки удалённого доступа

У сотрудника есть маршрут до портала. У самого портала есть отдельное соединение с БД.

Администратор подключается через выделенный узел.

<!-- Покажите F2–F5 на схеме. -->

---

## Критерий для порта БД

Из пула VPN сотрудников прямой TCP-доступ к PostgreSQL должен блокироваться.

Доступный порт подтверждает сетевую достижимость в проверенной точке.

<!-- Разберите F6. Основание для сетевых мер: https://www.consultant.ru/document/cons_doc_LAW_146520/ -->

---

## Повторная проверка

Из пула сотрудников проверяют отказ прямому соединению с БД.

Для рабочих функций подтверждают доступ к порталу и подключение портала к БД.

<!-- Назовите два уровня положительного сценария: F2 и F3. -->
