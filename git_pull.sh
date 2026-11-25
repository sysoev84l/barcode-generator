#!/bin/bash
if [ -z "$1" ]; then
    echo "Ошибка: первый параметр отсутствует."
    echo "Использование: ./script.sh <текст>"
    exit 1
fi
echo "Начинаем создовать коммит $1!"
git add .
git commit -m "$1"
git push