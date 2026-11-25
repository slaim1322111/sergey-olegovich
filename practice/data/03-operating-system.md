# Учебные результаты SCA и факты ОС

Данные вымышленные; это пример для разбора, а не экспорт реального стенда.

## Результаты проверки

```json
{
  "dataset": "SYNTHETIC TRAINING DATA — not a real Wazuh export",
  "os": "ALT Linux (учебный пример)",
  "checks": [
    {
      "id": "A1",
      "title": "Права /etc/passwd",
      "result": "passed",
      "rule": "stat /etc/passwd: 644 root:root"
    },
    {
      "id": "A2",
      "title": "Служба auditd включена",
      "result": "failed",
      "rule": "auditd enabled and active"
    },
    {
      "id": "A3",
      "title": "Права SSH-конфигурации",
      "result": "failed",
      "rule": "stat /etc/ssh/sshd_config: 600 root:root"
    },
    {
      "id": "A4",
      "title": "Проверка пакета через dpkg",
      "result": "not applicable",
      "reason": "Command dpkg unavailable"
    }
  ]
}
```

## Факты хоста

```text
SYNTHETIC TRAINING DATA — вымышленные результаты команд для практики.
stat /etc/passwd: 644 root:root
systemctl show auditd: ActiveState=inactive; UnitFileState=disabled
/etc/ssh/sshd_config: отсутствует
stat /etc/openssh/sshd_config: 600 root:root
command -v dpkg: команда отсутствует
rpm: присутствует
В задании требуется анализ результата; настройки не изменяются.
```
