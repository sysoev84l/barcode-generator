#! /bin/bash
filename="./assets/js/data/values.js"
sed -i 's/[[:blank:]]//g' "$filename"
sed -i 's/;/","/g' "$filename"
