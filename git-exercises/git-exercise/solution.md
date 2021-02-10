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

3.