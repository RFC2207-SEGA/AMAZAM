# SEGA-Project-Atelier
## Project Setup using: https://github.com/DaltonHart/HowTo-React-Webpack-Babel


1. Clone main branch to local machine
2. Git the file from the main branch onto your local machine. 

         git pull origin main
         OR
         git checkout origin main
        
    
3. This command will let you create a new Branch to start your work not on the main branch. Use this to send pull request to the main branch. 
    
         git checkout -b new-feature
    
4. Update, add, commit, and push changes

          git status
          git add <some-file>
          git commit
       
    
5. Push feature branch to remote
It’s a good idea to push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.

          git push -u origin new-feature
    
6. Resolve feedback
Now teammates comment and approve the pushed commits. Resolve their comments locally, commit, and push the suggested changes. Your updates appear in the pull request.
    
7. Merge your pull request
Before you merge, you may have to resolve merge conflicts if others have made changes to the repo. When your pull request is approved and conflict-free, you can add your code to the main branch. This is when code review process will happen BEFORE the merge is approved. 




