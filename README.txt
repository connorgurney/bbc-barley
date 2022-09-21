BARLEY CVS REPOSITORY
=====================

This set of files contains everything used in creating and maintaining the barley source files, as well as some useful
oddities.  As this is not a normal development project, a non-standard directory layout has been used.

CONTENTS:

readme.txt - this file

src/       - Contains versions of barley used for development, including
             verbose commenting and extra sanity checking
scripts/   - Contains scripts used to process the files, creating distributions 
             etc
doc/       - Contains various developer notes and documentation


INSTRUCTIONS:


LIVE:
To make a copy of the page templates for live, simply run:
./scripts/makelive/
at the top of the cvs tree.  this will create a directory called live, which will contain files ready to be uploaded to live

DEV:
To make a distribution of the page templates for a dev server, run
./scripts/makedev/
at the top of the cvs tree.  This will create a directory called dev, which contains the files ready to be uploaded to a dev
server

./scripts/makedevzip will create a dev distribution in zip format - the prefered format for sending around the bbc








CVS TODO:
nav5 schools.nav needs to be placed in cvs
does nav/js need to be in cvs?
do the wotv templates need to be in cvs?

