#!/usr/bin/env bash
cd /var/www/barcodegenerator.local
browser-sync http://barcodegenerator.local --files "*.css,assets/js/*.js,assets/scss/*.scss,assets/css/*.css,*.html,*.*"