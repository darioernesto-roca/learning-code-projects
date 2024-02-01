# Git Command Reference Guide

This repository serves as my quick personal reference guide for the most useful Git commands to help me manage my projects efficiently using Git.

## Getting Started with Git

Before begin with the commands, we need to have Git installed on our system. We can download it from [Git's official website](https://git-scm.com/downloads).

### Configuring Git
After installing Git, set username and email using the following commands:

```bash
git config --global user.name "My Name"
git config --global user.email "my.email@example.com"
```

## Basic Git Commands

### Initializing a Git Repository

```bash
git init
```

### Cloning a Repository
It creates a local copy of a remote repository:
```bash
git clone <repository-url>
```

### Checking Repository Status
Displays the status of the repository including staged, unstaged, and untracked files.

```bash
git status
```

### Adding Changes
Stages changes of a specific file or all changes in the directory for the next commit.

```bash
git add <file-name>
git add .
```

### Committing Changes
Records your changes to the local repository with a descriptive message.

```bash
git commit -m "Commit message"
```

## Branching and Merging

### Creates a new branch.

```bash
git branch <branch-name>
```

### Switching Branches
Switches to the specified branch.

```bash
git checkout <branch-name>
```

### Merging Branches
Merges the specified branch into the current branch.

```bash
git merge <branch-name>
```

## Working with Remotes

### Viewing Remote Repositories
Lists the remote connections we have to other repositories.

```bash
git remote -v
```

### Pushing Changes to Remote Repository
Sends your committed changes to the remote repository.

```bash
git push origin <branch-name>
```

### Pulling Changes from Remote Repository
Fetches and merges changes from the remote repository to your local repository.

```bash
git pull origin <branch-name>
```

## Advanced Git Commands

### Stashing Changes
Temporarily stores all modified tracked files and reverts the working directory to match the HEAD commit.

```bash
git stash
git stash pop
```

### Viewing Commit History
Displays the commit history.

```bash
git log
```

### Reverting Changes
Creates a new commit that undoes the changes made in the specified commit.

```bash
git revert <commit-hash>
```