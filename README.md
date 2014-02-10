This is the source of my personal website [ricardosampayo.com][1]. 

Steps to publish:

Make changes in the source branch
Build and test the site locally
Commit changes to source branch
git publish website which consists of the following steps

'git branch -D master'
'git checkout -b master'
'git filter-branch --subdirectory-filter _site/ -f'
'git checkout source'
'git push --all origin'

[1]:http://ricardosampayo.com/