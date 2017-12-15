#!/bin/sh
deployDir=/home/devops/web_demo/project/open_duo_test
ServerName=${@:$OPTIND:1}

Rev="$(git rev-parse HEAD)"

echo $Rev
cd dist
rsync -v -z -r --delete --progress -h --exclude=.* --exclude=*.sh . $ServerName:$deployDir

echo service deployed on:$ServerName:$deployDir
