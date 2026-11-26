#!/bin/bash
input_file="input.txt"
output_file="./assets/js/data/values.js"

awk '{
    if (NR > 1) {
        printf ",\r\n";
    }
    printf "\"%s\"", $0;
} END {
    printf "\n";
}' "$input_file" > "$output_file"
sed -i 's/;/", "/g' "$output_file"
awk 'BEGIN{print "const values = ["} {print}' $output_file > temp.txt && mv temp.txt $output_file
sed -i -e '$a]' $output_file