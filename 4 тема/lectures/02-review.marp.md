---
marp: true
theme: default
size: 16:9
paginate: true
title: "SSID, VLAN и профиль клиента | АБАС | В гостях у троллей"
style: |
  section { background: #f5f8fc; color: #17283d; font-family: 'Segoe UI', sans-serif; font-size: 31px; padding: 70px 80px; }
  h1, h2 { color: #103c61; }
  h1 { font-size: 46px; }
  h2 { font-size: 43px; }
  strong { color: #006878; }
  li { margin-block: 0.44em; }
  section.cover { background: #10283c; color: #eaf6ff; }
  section.cover h1, section.cover h2, section.cover strong { color: #eaf6ff; }
---

# SSID, VLAN и профиль клиента

SSID обозначает беспроводную сеть, которой соответствует профиль точки доступа. Для доказательства изоляции нужно сверить профиль и фактический VLAN клиента. Успешный выход в интернет возможен и при попадании гостя в служебную сеть.

<!-- https://www.consultant.ru/document/cons_doc_LAW_146520/ https://standards.ieee.org/ieee/802.1q/10323/ -->

---

## Нормы и материалы

**Основания по реестру** — Н3, М1, Л4.

**Учебные материалы** — Д2. Все данные относятся к системе клуба «В гостях у троллей».

---

## Практическая проверка

Сверить AP1 и AP2 с целевыми профилями. Указать ID выписки и факт, подтверждающий классификацию клиента на AP2.

**Сдать** — таблица фактических и целевых назначений.
