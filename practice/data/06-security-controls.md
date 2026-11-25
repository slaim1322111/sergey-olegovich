# Учебная карточка СЗИ

Карточка вымышленная и не является официальным сертификатом.

```json
{
  "dataset": "SYNTHETIC TRAINING DATA; this is not an official certificate",
  "product": "Учебный шлюз Т1",
  "card_reference": "LAB-DEMO-ONLY",
  "version_in_card": "3.1",
  "installed_version": "3.2",
  "additional_version_documents": "не предоставлены",
  "rules": [
    {
      "name": "deny_users_db",
      "enabled": false,
      "expected": "users -> database:5432 denied",
      "observed": "connection allowed"
    }
  ],
  "allowed_flow": "app -> database:5432 must remain allowed"
}
```
