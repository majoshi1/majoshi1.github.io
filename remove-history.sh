git checkout --orphan latest_branch
git add -A
git commit -am "Initial commit"
git branch -D master
git branch -m main
git push -f origin main

