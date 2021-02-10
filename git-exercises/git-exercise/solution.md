# Git Excercise insights
1. Folders: hooks, info, logs, objects, refs
	Files: COMMIT_EDITMSG, config, description, gitk.cache, HEAD, index, ORIG_HEAD, packed-refs

2.  $ git cat-file -t 150c52ee908332a3e61ad622e73f2da14d537c43
	commit
	
	$ git cat-file -p 150c52ee908332a3e61ad622e73f2da14d537c43
	tree e24e6d20a571784db71e7986eb36a05a9c23e35b
	parent 14358ff8b09d87d2bad5896d3a0c826313b9d400
	author Bhupendra Rao <mbhupendrads@gmail.com> 1612931123 +0530
	committer Bhupendra Rao <mbhupendrads@gmail.com> 1612932538 +0530

	Created todo list for batch-7

3. $ git reset
	Unstaged changes after reset:
	M       batch7_day_1/hello.txt
	
4. $ git stash push -m "last min change"
   Saved working directory and index state On batch7_day_1: last min change
   
5. $ git stash apply stash@{0}
	On branch feature/batch7_day_1
	Changes not staged for commit:
	  (use "git add <file>..." to update what will be committed)
	  (use "git restore <file>..." to discard changes in working directory)
			modified:   batch7_day_1/hello.txt

	no changes added to commit (use "git add" and/or "git commit -a")

6. $ git log
	commit 338202020f1441c63b4e90811a99bd320fa8ada2 (HEAD -> feature/batch7_day_1, tag: list)
	Author: Bhupendra Rao <mbhupendrads@gmail.com>
	Date:   Wed Feb 10 16:41:18 2021 +0530

		Installed npm and downloaded git-exercise

7. $ git tag -a 1.0
	$ git show 1.0
	tag 1.0
	Tagger: Bhupendra Rao <mbhupendrads@gmail.com>
	Date:   Wed Feb 10 10:21:12 2021 +0530

	release 1.0 i.e feature/batch7_day_1

	commit 150c52ee908332a3e61ad622e73f2da14d537c43 (tag: 1.0, origin/feature/batch7_day_1)
	Author: Bhupendra Rao <mbhupendrads@gmail.com>
	Date:   Wed Feb 10 09:55:23 2021 +0530

		Created todo list for batch-7

	diff --git a/batch7_day_1/todo.txt b/batch7_day_1/todo.txt
	new file mode 100644
	index 0000000..1687cc7
	--- /dev/null
	+++ b/batch7_day_1/todo.txt
	@@ -0,0 +1,3 @@
	+Todo:
	+
	+git-exercise
	\ No newline at end of file

8.
	