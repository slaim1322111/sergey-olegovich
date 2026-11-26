---
marp: true
theme: default
size: 16:9
paginate: true
title: Границы кадровой ИСПДн и УЗ
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

# Границы кадровой ИСПДн

В проверку входят корпоративный ноутбук, VPN, каталог, портал, БД и сеть управления.

Границы устанавливают по составу компонентов и движению данных.

<!-- Покажите паспорт Д1. -->

---

## Исходные данные для УЗ

- Категория ПДн и круг субъектов
- Число субъектов при необходимости
- Тип актуальных угроз

Уровень определяют по постановлению № 1119.

<!-- Подпункт для кейса после выдачи Д1‑У. https://www.consultant.ru/document/cons_doc_LAW_137356/8c86cf6357879e861790a8a7ca8bea4227d56c72/ -->

---

## Сценарий для проверки

Выберите один актив и доступ к нему, который нужно ограничить.

Для базы кадровых данных это прямой TCP-доступ из пула VPN сотрудников.

<!-- Привяжите сценарий к F6 и попросите назвать возможное последствие. -->
