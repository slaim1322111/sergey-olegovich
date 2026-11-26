---
marp: true
theme: default
size: 16:9
paginate: true
title: "Защита сетевого узла и ОС | АБАС"
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

# Защита сетевого узла и ОС

Слушающий адрес показывает, где служба принимает соединения.

Доступность из конкретной зоны зависит также от маршрута и правил фильтрации.

<!-- Покажите Д3.1 и Д3.2. Для управления доступом см. п. 8.2 приказа № 21. https://www.consultant.ru/document/cons_doc_LAW_146520/ -->

---

## Проверка профиля Wazuh SCA

- Прочитайте критерий и причину результата.
- Сверьте путь с тем, который использует служба.
- Отдельно проверьте владельца и права рабочего файла.

<!-- Профиль может ожидать путь другого дистрибутива. https://documentation.wazuh.com/current/user-manual/capabilities/sec-config-assessment/how-it-works.html -->

---

## Два вывода по SSH

Доступ оценивают по наблюдениям из сети управления и пользовательской сети.

Права конфигурации оценивают по рабочему файлу. Для повторной оценки профилю нужен корректный путь.

<!-- Предложите оформить два независимых вывода по Д3. -->
