# Учебный SQL-пример

Все записи вымышленные. База создаётся в памяти и исчезает после завершения процесса.

Скопировать код в файл `exercise_sql.py` и выполнить `python exercise_sql.py`.

```python
"""Вымышленная SQLite-база в памяти. Учебный пример небезопасной конкатенации."""
import sqlite3

conn = sqlite3.connect(':memory:')
conn.execute('CREATE TABLE students(id INTEGER, name TEXT)')
conn.executemany('INSERT INTO students VALUES (?, ?)', [(1, 'Анна'), (2, 'Борис'), (3, 'Вера')])

def find_student(name):
    # ЗАДАНИЕ: заменить конкатенацию параметризованным запросом.
    query = "SELECT id, name FROM students WHERE name = '" + name + "'"
    return conn.execute(query).fetchall()

if __name__ == '__main__':
    for value in ('Анна', "' OR 1=1 --"):
        print(repr(value), '->', find_student(value))
```

## Разбор без запуска

До исправления обычное имя «Анна» возвращает 1 запись, а специальная строка из кода — 3. После параметризации ожидаются результаты 1 и 0.
