---
marp: true
theme: default
size: 16:9
paginate: true
title: "Сегментация и проверка TLS | АБАС"
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

# Сегментация и проверка TLS

В целевой матрице указывают источник, назначение, порт и основание доступа.

Для каждой строки сравнивают цель с наблюдением из той же сетевой зоны.

<!-- Основание: п. 8.13 приказа № 21, конкретные критерии задаёт кейс. https://www.consultant.ru/document/cons_doc_LAW_146520/ -->

---

## Имя сервиса в TLS

Клиент ожидает zapis.trolli.example.

Цепочка доверия, срок и соответствие имени в SAN проверяются отдельно. Имя old.trolli.example не подтверждает zapis.trolli.example.

<!-- Разберите Д5-TLS. RFC 9525: https://www.rfc-editor.org/rfc/rfc9525.html -->

---

## Проверка после изменения

Повторите проверку имени на веб-шлюзе.

Проверьте, что шлюз передаёт запрос приложению, а приложение соединяется с БД.

Из пользовательской зоны проверьте отказ прямого доступа к приложению и БД.

<!-- Сопоставьте проверки со строками F1, F2, F3, F6 и F7. -->
