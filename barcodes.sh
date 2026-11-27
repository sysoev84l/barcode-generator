#!/bin/bash
./get_values.sh
if [ $? -eq 0 ]; then
    echo "values.js успешно сгенерирован!"
else
    echo "Произошла ошибка: код $?"
fi
if [ -z "$1" ]; then
    echo "Ошибка: первый параметр отсутствует."
    echo "Использование: ./barcodes.sh <текст>"
    echo "Скрипт ./git_pull.sh не отработает"
    exit 1
fi
./git_pull.sh $1