#!/bin/bash

# Installera stylelint om det inte redan är installerat
npm install -g stylelint

# Validera CSS-koden
stylelint "src/**/*.css"
