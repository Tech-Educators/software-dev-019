1. Go you your github profile
2. Click on your respositories tab.
3. Click the 'new' green button.
4. Give your repo a name. keep it public. ADD A README FILE. CHECK THE CHECKBOX.
5. Click 'create repo'

// double check you're logged in.

# How to clone a repo

1. Hit the green code button
2. Make sure you're on the SSH tab.
3. Copy the url.
4. Go to our terminals.
5. Make sure you're in the correct location (in your file structure) and that you're not inside an existing project.
6. `git clone` and paste in the url - then hit enter - for example:
   `git clone git@github.com:slouloudis/git-demo2.git`
7. After cloning you will get some text like this:

```linux
Cloning into 'git-demo2'...
Enter passphrase for key '/Users/sam/.ssh/id_rsa':
remote: Enumerating objects: 3, done.
remote: Counting objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (3/3), done.

```

8. You can CD into this like any other repo.

# How to use git.

1. Once you've made some changes you're happy with, go to your terminal - make sure you're inside the project repo

do the following command `git add .`

The . means 'add everything'

2. Another command - `git commit -m 'a message explaning changes'`

3. `git push` is the final step to actually upload the code to github.

All done!

add commit push

git add .
git commit -m 'your message'
git push

## Deploying a site :

// If I did want to share my code with other people: (The actual website, not just the code itself) we're going to use GitHub Pages for now.

1. Go to the settings tab.
2. On the bar to the left, look for the 'pages' tab.
3. deploy from branch
4. select 'main' as the branch
5. select 'root' as the folder and save.

To check its working :

1. Click on the 'code' tab to bring you back to the main page of the repo.
2. Scroll down to see a deployments section to the right - if you have a website currently deployed it will show there.

3. If you want to check the progress of the deployment, checkout the actions tab.

If you're on ubuntu and you forget to finish your quotes in the message:

```
hit 'esc'
then type :wq
hit enter

```

If you don't write a commit message your terminal will ask you for one.
If this happens to you you'll be in this horrible menu.

Tactic one ->

1. Nuke the terminal (close it) and start your commit message again.
