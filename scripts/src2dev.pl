#!/usr/bin/perl

# takes stdin, and:
# 1 - removes any comments starting with <!-- ! 
# 2 - removes all linebreaks

# this is all a big hack, but it works

while (<STDIN>) {
# remove dev sections
  if(/<\!-- start dev -->/) {
    print;
    while(<>) {
      print;
      if(/<\!-- end dev -->/) { last; }
      
    }
  } 
  else {
    # remove comments
    s/<\!--\s?\![^>]*-->//g; 
    # remove linebreaks
    s/\n//;
    s/\r//;
    chomp;
    # output
    print;

  }
}
