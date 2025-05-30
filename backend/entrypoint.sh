#!/bin/sh

while ! nc -z db 3306; do
    sleep 1
done

echo "MySQL started"

python manage.py mikemigrations
python manage.py migrate
python manage.py runserver 0.0.0.0:8000