# SEGA-Project-Atelier
# Project Setup using: https://github.com/DaltonHart/HowTo-React-Webpack-Babel


1. Clone main branch to local machine
2. Start with the main branch - All feature branches are created off the latest code state of a project. This guide assumes this is maintained and updated in the main branch.
    ##### git checkout main
    ##### git fetch origin 
    ##### git reset --hard origin/main
This switches the repo to the main branch, pulls the latest commits and resets the repo's local copy of main to match the latest version.

         ## OR 
         #### git pull origin main
    
3. Create a new-branch. Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch.
    ##### git checkout -b new-feature
    
4. Update, add, commit, and push changes
On this branch, edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch on Bitbucket.
    ##### git status
    ##### git add <some-file>
    ##### git commit
    
    
5. Push feature branch to remote
It’s a good idea to push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.
    #### git push -u origin new-feature
    
6. Resolve feedback
Now teammates comment and approve the pushed commits. Resolve their comments locally, commit, and push the suggested changes to Bitbucket. Your updates appear in the pull request.
    
7. Merge your pull request
Before you merge, you may have to resolve merge conflicts if others have made changes to the repo. When your pull request is approved and conflict-free, you can add your code to the main branch. Merge from the pull request in Bitbucket.




