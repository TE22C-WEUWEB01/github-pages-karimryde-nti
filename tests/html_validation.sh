#!/bin/bash

# Installera html5validator om det inte redan är installerat
pip install --user html5validator

# Validera HTML-koden
html5validator --root /path/to/student/project
