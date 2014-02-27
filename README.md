# Some-Regex-Tasks

These are some tasks in regex that you can try. ;) It was originally made for a school project within about 10 hours.

It is written with meteor so the setup is quiet simple. You'll need:

- meteor (if not already) `curl https://install.meteor.com/ | sh`
- meteorite (if not already) `npm install -g meteorite`
- dependencies `mrt install`
- and to start it `meteor run --production`

# Pages included

- `/` The startpage asks for a name which is optional
- `/tasks/{mongoid}` Here the tasks can be answered. You will be redirected here from the start page.
- `/list` This page is normally hidden. It shows all tasks that have been done yet. Neet to check if multiple persons try to finish this ;)
