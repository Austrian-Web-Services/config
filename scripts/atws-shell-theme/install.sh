#!/bin/bash

wget https://github.com/JanDeDobbeleer/oh-my-posh/releases/latest/download/posh-linux-amd64 -O /usr/local/bin/oh-my-posh

sudo chmod +x /usr/local/bin/oh-my-posh

/usr/local/bin/oh-my-posh font install Hack

echo "$(/usr/local/bin/oh-my-posh init bash --config 'https://raw.githubusercontent.com/Austrian-Web-Services/config/main/scripts/atws-shell-theme/atws.omp.json')" >> ~/.bashrc

exec bash
