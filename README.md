
# statstat

*Ansible* collects a great deal of data of your fleet. With **statstat**
that information becomes easily accessible and searchable.

Usage:

    $ ansible-playbook -i <inventory> [--ask-become-pass] fetch-facts.yml
    $ node statstat.js [-n, --no-open]

Give ansible the *inventory* of your fleet and run `fetch-facts.yml`
playbook. This will populate the `data` directory with *json* files.
After that, run statstat server. If `-n` or `--no-open` is not provided,
statstat will try to open a browser window/tab.
