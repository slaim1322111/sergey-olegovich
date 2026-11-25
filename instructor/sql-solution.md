# Решение учебного SQL-примера

Ожидаемые результаты: обычное имя — одна запись; специальный ввод — ноль записей.

```python
"""Вымышленная SQLite-база в памяти. Эталон исправления с параметризацией."""
import sqlite3

conn = sqlite3.connect(':memory:')
conn.execute('CREATE TABLE students(id INTEGER, name TEXT)')
conn.executemany('INSERT INTO students VALUES (?, ?)', [(1, 'Анна'), (2, 'Борис'), (3, 'Вера')])

def find_student(name):
    # Значение передаётся отдельно от синтаксиса SQL.
    return conn.execute("SELECT id, name FROM students WHERE name = ?", (name,)).fetchall()

if __name__ == '__main__':
    for value in ('Анна', "' OR 1=1 --"):
        print(repr(value), '->', find_student(value))
```
