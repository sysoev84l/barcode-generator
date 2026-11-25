#!/bin/bash
if [ -z "$1" ]; then
    echo "Ошибка: первый параметр отсутствует."
    echo "Использование: ./barcodes.sh <текст>"
    echo "Скрипт ./git_pull.sh не отработает"
fi
./get_values.sh
./git_pull.sh $1