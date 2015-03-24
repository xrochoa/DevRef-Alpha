var data = {
    "objectxxx": [{
        "Command": "init",
        "Description": "Create an empty Git repository or reinitialize an existing one",
        "boolxxx": true
    }, {
        "Command": "config",
        "Description": "Configuration options",
        "boolxxx": true,
        "options": [{
            "Command": "git config --global alias.<alias> <command>",
            "Description": "Creates alias to type faster. Use \"\" for commands with a space"
        }, {
            "Command": "git config --global core.excludesfile ~/.gitignore_gobal",
            "Description": "Configure global ignore file. Use after touch .gitignore "
        }, {
            "Command": "git config --list",
            "Description": "List of configuration items"
        }]
    }, {
        "Command": "help",
        "Description": "Get help about git commands and options",
        "boolxxx": true
    }, {
        "Command": "add",
        "Description": "Add file contents to the index",
        "boolxxx": false
    }, {
        "Command": "commit",
        "Description": "Record changes to the repository",
        "boolxxx": false,
        "options": [{
            "Command": "git commit --amend -m \"<message>\"",
            "Description": "Commits replacing last commit"
        }, {
            "Command": "git commit -a",
            "Description": "Commit and add simultaneusly"
        }]
    }, {
        "Command": "stash",
        "Description": "Save edits to a temporal stash",
        "boolxxx": false,
        "options": [{
            "Command": "git stash apply",
            "Description": "bring changes out of stash (leaves stash)"
        }, {
            "Command": "git stash clear",
            "Description": "danger: deletes everything in stash"
        }, {
            "Command": "git stash drop stash@{0}",
            "Description": "deletes stash"
        }, {
            "Command": "git stash list",
            "Description": "thing that are on the stash"
        }, {
            "Command": "git stash pop",
            "Description": "bring changes out of stash (removes stash)"
        }, {
            "Command": "git stash save \"sloppy messagefor myself\"",
            "Description": "saves changes to stash for later"
        }, {
            "Command": "git stash show -p stash@{0}",
            "Description": "shows set of changes like a diff"
        }, {
            "Command": "git stash show stash@{0}",
            "Description": "shows stash diff, changes"
        }]
    }, {
        "Command": "status",
        "Description": "Show the working tree status",
        "boolxxx": true
    }, {
        "Command": "log",
        "Description": "Show commit logs",
        "boolxxx": true,
        "options": [{
            "Command": "git log",
            "Description": "Commit history"
        }, {
            "Command": "git log --author=Xavier",
            "Description": "Commit history by author"
        }, {
            "Command": "git log --format=oneline",
            "Description": "Commit history format (can also use short, medium, fuller, email, raw)"
        }, {
            "Command": "git log --graph",
            "Description": "Show commit history graph"
        }, {
            "Command": "git log --grep=<word>",
            "Description": "Commit history searching for keywords(grep=regular expression search)"
        }, {
            "Command": "git log --oneline",
            "Description": "Commit history in one line"
        }, {
            "Command": "git log --oneline -<number>",
            "Description": "Number of commits to show in one line"
        }, {
            "Command": "git log --since=<date> (or --after=<date>)",
            "Description": "Commit history since (e.g 2012-06-14)"
        }, {
            "Command": "git log --stat --summary",
            "Description": "Stats summary for change"
        }, {
            "Command": "git log --until=<date> (or --before=<date>)",
            "Description": "Commit history until (e.g 2012-06-14)"
        }, {
            "Command": "git log -n <number>",
            "Description": "Number of commits to show"
        }, {
            "Command": "git log -p",
            "Description": "Patch option that shows modifications in commits"
        }, {
            "Command": "git log HEAD",
            "Description": "Shows HEAD"
        }]
    }, {
        "Command": "diff",
        "Description": "Show changes between commits, commit and working tree, etc",
        "boolxxx": true,
        "options": [{
            "Command": "git diff --color-words",
            "Description": "Shows modifications for words instead of lines"
        }, {
            "Command": "git diff --staged (or --cached for older version)",
            "Description": "Shows modifications (staged)"
        }, {
            "Command": "git diff <branch> <branch>",
            "Description": "Compares tips of branches"
        }, {
            "Command": "git diff <file>",
            "Description": "Shows modifications to file"
        }, {
            "Command": "git diff <SHA>",
            "Description": "Shows changes between commits"
        }, {
            "Command": "git diff <SHA> <file>",
            "Description": "Shows changes between commits for file"
        }]
    }, {
        "Command": "show_",
        "Description": "Show various types of objects",
        "boolxxx": true,
        "options": [{
            "Command": "git show SHA",
            "Description": "shows commit with diffs"
        }]
    }, {
        "Command": "grep",
        "Description": "Print lines matching a pattern",
        "boolxxx": true
    }, {
        "Command": "branch",
        "Description": "List, create, or delete branches",
        "boolxxx": false,
        "options": [{
            "Command": "git brach <branch>",
            "Description": "Create branch"
        }, {
            "Command": "git branch",
            "Description": "List of branches"
        }, {
            "Command": "git branch --merged",
            "Description": "List of branches merged in the past to current branch"
        }, {
            "Command": "git branch --no-merge",
            "Description": "List of branches not merged in the past to current branch"
        }, {
            "Command": "git branch -a",
            "Description": "List of local and remote branches"
        }, {
            "Command": "git branch -d <branch>",
            "Description": "Deletes branch if it has been merged"
        }, {
            "Command": "git branch -m <branch> <branch>",
            "Description": "Rename branch"
        }, {
            "Command": "git branch -r",
            "Description": "List of remote branches"
        }]
    }, {
        "Command": "checkout",
        "Description": "Checkout a branch or paths to the working tree. Undo to last commited version.",
        "boolxxx": false,
        "options": [{
            "Command": "git checkout -d <branch>",
            "Description": "Create branch and move to it"
        }, {
            "Command": "git checkout <branch>",
            "Description": "Move to a branch"
        }, {
            "Command": "git checkout <SHA> <file>",
            "Description": "Undo to a selected commit"
        }]
    }, {
        "Command": "merge",
        "Description": "Join two or more development histories together",
        "boolxxx": false,
        "options": [{
            "Command": "git merge --abort",
            "Description": "Abort a merge when in conflict"
        }, {
            "Command": "git merge --ff--only <branch>",
            "Description": "Merge if fast forward is possible"
        }, {
            "Command": "git merge --no-ff <branch>",
            "Description": "Makes a real merge to a fast forward merge just to reflect it in log (make some noise)"
        }, {
            "Command": "git merge <branch>",
            "Description": "Merge branch to current one"
        }]
    }, {
        "Command": "clone",
        "Description": "Clone a repository into a new directory",
        "boolxxx": true,
        "options": [{
            "Command": "git clone <url> <dir>",
            "Description": "Create a local repo from remote"
        }]
    }, {
        "Command": "fetch",
        "Description": "Download objects and refs from another repository",
        "boolxxx": true,
        "options": [{
            "Command": "git fetch <origin>",
            "Description": "Get changes from remote"
        }]
    }, {
        "Command": "pull",
        "Description": "Fetch from and integrate with another repository or a local branch (git fetch + git merge)",
        "boolxxx": true
    }, {
        "Command": "push",
        "Description": "Update remote refs along with associated objects",
        "boolxxx": true,
        "options": [{
            "Command": "git push -u origin master",
            "Description": "Pushes to remote and stablishes link between branches"
        }, {
            "Command": "git push <origin> --delete <branch>",
            "Description": "Deletes branch from remote"
        }, {
            "Command": "git push <origin> :<branch>",
            "Description": "Deletes branch from remote"
        }, {
            "Command": "git push <origin> <branch>",
            "Description": "Pushes branch to remote"
        }]
    }, {
        "Command": "reset",
        "Description": "Reset current HEAD to the specified state",
        "boolxxx": false,
        "options": [{
            "Command": "git reset",
            "Description": "DANGEROUS! destructive move of HEAD (unless I save the SHA...that if not used will be saved as garbage until is thrown away at some point)"
        }, {
            "Command": "git reset --hard 65a6s76fd76",
            "Description": "changes staging index and working directory"
        }, {
            "Command": "git reset --mixed(default) 65a6s76fd76",
            "Description": "staging index matches repository, no changes to working directory"
        }, {
            "Command": "git reset --soft 65a6s76fd76",
            "Description": "doesnt change staging index or working directory"
        }, {
            "Command": "git reset HEAD filename.html",
            "Description": "removes a file from the index before commit (in case I want to organize my commit with related changes)"
        }]
    }, {
        "Command": "mv",
        "Description": "Move or rename a file, a directory, or a symlink",
        "boolxxx": false,
        "options": [{
            "Command": "git mv <file>",
            "Description": "Rename file"
        }, {
            "Command": "git mv <file> <path/dir/file>",
            "Description": "Move file"
        }]
    }, {
        "Command": "rm",
        "Description": "Remove files from the working tree and from the index",
        "boolxxx": false,
        "options": [{
            "Command": "git rm --cached filename",
            "Description": "used to to delete file when ignored by .gitignore but commited in the past"
        }, {
            "Command": "git rm filename",
            "Description": "to delete files (send info to index as git add) rm removes form computer in 2 steps....the finder method sends it to trash and is 3 steps"
        }]
    }, {
        "Command": "remote",
        "Description": "List of remote repos (origin is default)",
        "boolxxx": false,
        "options": [{
            "Command": "git remote -v",
            "Description": "Info about url of fetch and push"
        }, {
            "Command": "git remote add <alias> <url>",
            "Description": "alias of repo and url where to find it (diferent alias for diferent repos)"
        }, {
            "Command": "git remote add origin (githublink)",
            "Description": "add local repo to git.com...new repo (origin)"
        }, {
            "Command": "git remote rm <alias>",
            "Description": "removes repo"
        }]
    }, {
        "Command": "revert",
        "Description": "reverts",
        "boolxxx": false,
        "options": [{
            "Command": "git revert -n 65a6s76fd76(partial SHA, form begining)",
            "Description": "reverts to a version without commiting, just staging (if the changes were too complex since that version its probably a better idea to do erge)"
        }, {
            "Command": "git revert 65a6s76fd76(partial SHA, form begining)",
            "Description": "reverts to a version as anew commit"
        }]
    }, {
        "Command": "OTHER",
        "Description": "OTHER",
        "boolxxx": false,
        "options": [{
                "Command": "git clean -f",
                "Description": "Forces removal of unstaged items"
            }, {
                "Command": "git clean -n",
                "Description": "Info of unstaged items to be removed"
            },

            {
                "Command": "git ls-tree <SHA> <dir>",
                "Description": "List of files in a commit and directory"
            }, {
                "Command": "git mertool --tool=<tool>",
                "Description": "Use a merge tool in case of merging conflicts"
            }
        ]
    }]
};