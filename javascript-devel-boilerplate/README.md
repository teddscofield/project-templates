# JavaScript boilerplate project

A boilerplate (or template) project with all the modern goodies I've found
useful when developing with HTML5 technologies.  Primarily JavaScript.

There are a lot of tools, steps, roles, etc. in play that make life easier and
its tough to figure it all out, especially for a noobie like me.  So this is
my working, baseline example that exists mainly for my own reference.

I documented the hell out of everything so that I'll actually remember what
everything is for, why it is use, etc.  Would be cool if it helped explain
things to someone else too. :)

## Tools and Libraries

### develop and build time
  * bourne shell - primary development enviornment
  * npm - package manager
  * bower - package manager
  * node - runtime used by grunt and npm
  * grunt - task runner
  * jshint - javascript source linting

### runtime
  * RequireJS - AMD style module loding
  * backbone - MV* framework
  * lodash - utility library, backbone dependency
  * jQuery - DOM manipulation, ajax handling, deferred library

## On requring bourne shell
I'm intentionally forcing the use of a *nix-like bourne shell in this
boilerplate.  The main reason is that is where I am most comfortable.
It is also extremely compatible.  Even on windows : )

Since I jump around between Windows, Linux and OSX all the time, the fewer
things that change the better.

### Windows - http://msysgit.github.io/
Get msysgit for windows to use this boilerplate.  Even if you are not
a git user, it is the easiest way to get a *nix-like shell environment
up and running on a windows box I have encountered.

p.s. learn and use git ; )

## package managers
I'm using two different package managers intentionally.  Amittedly I started
that way because the app I learned on worked like that.  Having had a chance
to think through and digest things, I'm working under the following rationale:

npm is being used for develop and build time package dependencies.
bower is being used for runtime library package dependencies.

## Project setup
You will need to download and install nodejs before anything else.

You'll probably need git before all is said and done.  Everything assumes
you have it installed.

Install grunt, grunt-cli and bower globally.

There is an init-project shell script that sets up grunt as well as 
the npm and bower managed packages.  Other project initialization
routines will start, at the very least, in this script.

Expect this script to break!

You'll most likely need to update file paths as the library vendors switch
things around.  Such is life.  Once you have a stack tuned the way you like
it, set the dependency versions EXACT version numbers instead of 'latest' to
stabilize the project.