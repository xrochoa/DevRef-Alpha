var data = {
    "bashdata": [{
            "Command": "echo",
            "Description": "write arguments to the standard output",
            "Options": [{
                "Option": "-n",
                "Description": "doesn't print the newline character"
            }],
            "Arguments": "<string>"
        }, {
            "Command": "exit",
            "Description": "exits shell in terminal"
        }, {
            "Command": "ls",
            "Description": "list directory contents",
            "Options": [{
                "Option": "-l",
                "Description": "long format"
            }, {
                "Option": "-a",
                "Description": "include hidden files"
            }, {
                "Option": "-h",
                "Description": "reduce digits - human readable"
            }, {
                "Option": "-G",
                "Description": "colors results"
            }],
            "Arguments": "<path>*"

        }, {
            "Command": "cat",
            "Description": "print files and concatenate files",
            "Options": [{
                "Option": "-n",
                "Description": "number the output lines"
            }],
            "Arguments": "<file1.txt> <file2.txt>*"

        }, {
            "Command": "banner",
            "Description": "print large banner on printer",
            "Options": [{
                "Option": "-w",
                "Description": "banner width, e.g. -w50"
            }],
            "Arguments": "<string>"

        }, {
            "Command": "sh",
            "Description": "Bourne shell 1977"
        }, {
            "Command": "csh",
            "Description": "C shell 1979"
        }, {
            "Command": "tcsh",
            "Description": "Tabbed C shell 1979"
        }, {
            "Command": "ksh",
            "Description": "Korn shell 1982"
        }, {
            "Command": "bash",
            "Description": "Bourne again shell 1987"
        }, {
            "Command": "zsh",
            "Description": "Z shell 1990"
        }, {
            "Command": "man",
            "Description": "format and display the manual pages",
            "Options": [{
                "Option": "-k",
                "Description": "exactly the same as apropos"
            }],
            "Arguments": "<command>"
        }, {
            "Command": "apropos",
            "Description": "search the whatis database for command keywords",
            "Arguments": "<string>"
        }, {
            "Command": "whatis",
            "Description": "search the whatis database for complete words",
            "Arguments": "<command>"
        }, {
            "Command": "pwd",
            "Description": "return working directory name",
        }, {
            "Command": "cd",
            "Description": "change directory",
            "Arguments": "<path>"

        }, {
            "Command": "touch",
            "Description": "create files and update file access and modification times",
            "Arguments": "<file>"

        }, {
            "Command": "nano",
            "Description": "text editor - same as pico",
            "Arguments": "<file>"

        }, {
            "Command": "less",
            "Description": "text reader - same as more",
            "Options": [{
                "Option": "-M",
                "Description": "shows more info"
            }, {
                "Option": "-N",
                "Description": "shows line numbers"
            }],
            "Arguments": "<file>"
        }, {
            "Command": "head",
            "Description": "display first lines of a file",
            "Arguments": "<file>"
        }, {
            "Command": "tail",
            "Description": "display the last part of a file",
            "Options": [{
                "Option": "-f",
                "Description": "watches changes in file"
            }],
            "Arguments": "<file>"
        }, {
            "Command": "mkdir",
            "Description": "make directories",
            "Options": [{
                "Option": "-p",
                "Description": "create intermediate directories in path"
            }, {
                "Option": "-v",
                "Description": "lists created folders"
            }],
            "Arguments": "<dir or path/dir>"
        }, {
            "Command": "mv",
            "Description": "move and rename files",
            "Options": [{
                "Option": "-f",
                "Description": "overwrites (default)"
            }, {
                "Option": "-n",
                "Description": "no overwritting"
            }, {
                "Option": "-i",
                "Description": "ask to overwrite"
            }, {
                "Option": "-v",
                "Description": "lists moved or renamed files"
            }],
            "Arguments": "<file or path/file>"
        }, {
            "Command": "cp",
            "Description": "copy files",
            "Options": [{
                "Option": "-f",
                "Description": "overwrites (default)"
            }, {
                "Option": "-n",
                "Description": "no overwritting"
            }, {
                "Option": "-i",
                "Description": "ask to overwrite"
            }, {
                "Option": "-v",
                "Description": "lists moved or renamed files"
            }, {
                "Option": "-R",
                "Description": "includes subfolders and files"
            }],
            "Arguments": "<file or path/file>"
        }, {
            "Command": "rm",
            "Description": "remove directory entries",
            "Options": [{
                "Option": "-R",
                "Description": "includes subfolders and files"
            }],
            "Arguments": "<file or path/file>"
        }, {
            "Command": "rmdir",
            "Description": "remove empty directories",
            "Arguments": "<path>"
        }, {
            "Command": "ln",
            "Description": "creates hardlink",
            "Options": [{
                "Option": "-s",
                "Description": "creates symbolic link"
            }],
            "Arguments": "<file>"
        }



    ]
};

var template1 = {
    "Command": "rmdir",
    "Description": "remove empty directories",
    "Arguments": "<path>"
};

var template = {
    "Command": "ln",
    "Description": "creates hardlink",
    "Options": [{
        "Option": "-s",
        "Description": "creates symbolic link"
    }],
    "Arguments": "<file>"
};