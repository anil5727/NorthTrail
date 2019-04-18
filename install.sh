#!/bin/bash

BRANCH=$(git symbolic-ref --short HEAD)

USERNAME=`sfdx force:org:list --json | jq -r '.result.scratchOrgs[] | select (.alias=="nto" and .status=="Active") | .username'`

sfdx force:org:create -s -f config/project-scratch-def.json -a nto -d 1 -w 20
sfdx force:source:push

sfdx force:user:permset:assign -n nto
sfdx force:data:tree:import --plan ./data/Merchandise__c-plan.json
sfdx force:data:tree:import --plan ./data/Account-Merchandising_Mix__c-plan.json

sfdx force:org:open

if [ ! -z "$USERNAME" ]
then
sfdx force:org:delete -u $USERNAME -p
fi

sfdx force:org:list
