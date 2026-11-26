---
marp: true
theme: default
size: 16:9
paginate: true
title: Взаимная аутентификация и доступ к очередям
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

# Взаимная аутентификация и доступ к очередям

Приёмник должен установить, какой филиал подключился и в какую очередь ему можно записывать.

Серверное имя и SAN, доверие к сертификату, идентификация клиента при mTLS и прикладные полномочия.

<!-- Покажите место проверки на схеме обмена. -->

---

## Взаимный TLS и право на очередь

Взаимный TLS подтверждает обе стороны соединения.

Допустимую очередь приёмник определяет по служебной идентичности и локальной матрице прав.

<!-- Откройте M31–M33. https://www.rfc-editor.org/rfc/rfc8446.html https://www.rfc-editor.org/rfc/rfc9525.html -->

---

## Результат практики

Разделить вывод о TLS и о допуске к очереди по одному результату.

**Материал к сдаче** — карточка проверки имени и полномочий.

<!-- Попросите указать ID наблюдения и связать его с выводом. -->
