#!/usr/bin/perl

# takes stdin, and:
# 1 - removes anything between <!-- start dev --> and <!-- end dev -->
#     comments
# 2 - removes any comments starting with <!-- ! 

# this is all a big hack, but it works

while (<STDIN>) {
  # remove dev sections
  if(/<\!-- start dev -->/) {
    while(<>) {
      if(/<\!-- end dev -->/) { last; }
    }
  } 
  else {
    # remove comments
    s/<\!--\s?\![^>]*-->//g; 
    # change the word "barley" to "page layout"
    s/barley/page layout/gi;
    # remove linebreaks
#    s/\n//;
    s/\r//;
#    chomp;
    # output
    print;
  }
}
# trailing newline for tidyness
print "\n";

