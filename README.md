# Barley CVS Repository

This set of files contains everything used in creating and maintaining the Barley source files, as well as some useful oddities. As this is not a normal development project, a non-standard directory layout has been used.

## Foreword

This repository is an almost exact copy of the BBC's CVS repository containing page layout templates (colloquially known as Barley) used on BBC.co.uk between circa 2002 through to 2008 (when they were superseded by [Barlesque](https://www.bbc.co.uk/includes/blq/)).

I have updated the README to use Markdown rather than plain text and have corrected a number of spelling mistakes, but this is otherwise the files that I received from the BBC. If you'd like to see the originals with no alterations, you can [view this point in history](https://github.com/connordoner/bbc-barley/tree/0811212e0a52a810e15ede53500bd80a46c2ad02).

## Contents

* readme.txt - this file
* src/ - Contains versions of barley used for development, including verbose commenting and extra sanity checking
* scripts/ - Contains scripts used to process the files, creating distributions etc
* documentation/ - Contains various developer notes and documentation

## Instructions

### Live

To make a copy of the page templates for live, simply run: `./scripts/makelive/` at the top of the CVS tree. This will create a directory called live, which will contain files ready to be uploaded to live.

### Dev

To make a distribution of the page templates for a dev server, run `./scripts/makedev/` at the top of the CVS tree.  This will create a directory called dev, which contains the files ready to be uploaded to a dev server. 

`./scripts/makedevzip` will create a dev distribution in ZIP format - the prefered format for sending around the BBC

## CVS TODO

- [ ] nav5 schools.nav needs to be placed in CVS
- [ ] Does nav/js need to be in CVS?
- [ ] Do the wotv templates need to be in CVS?
