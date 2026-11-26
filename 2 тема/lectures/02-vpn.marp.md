---
marp: true
theme: default
size: 16:9
paginate: true
title: "VPN, MFA и состояние устройства | АБАС"
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

# Условия доступа к VPN

По Л1 вход сотрудника требует успешной многофакторной проверки и управляемого устройства.

Оба решения отражают в протоколе.

<!-- Укажите, что Л1 задаёт конкретные критерии этого кейса. https://pages.nist.gov/800-63-4/sp800-63b.html -->

---

## Проверка устройства

Управляемость подтверждает корпоративная проверка состояния устройства.

Поле «пропущена» оставляет условие допуска неподтверждённым.

<!-- Покажите события D21 и D22. https://csrc.nist.gov/pubs/sp/800/46/r2/final -->

---

## Проверки допуска

- Управляемый ноутбук с MFA получает доступ.
- Для личного устройства ожидают отказ.
- При отказе MFA ожидают отказ во входе.

<!-- Попросите записать доказательства по каждому сценарию. -->
