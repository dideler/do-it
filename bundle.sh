#!/usr/bin/env bash

zip -9 -r $(date +%F)-do-it.zip . -x "*.git*" "*.md" "$0"
