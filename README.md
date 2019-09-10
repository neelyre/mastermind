MASTERMIND game
written by Rick Neely

programs used:
Javacsript
CSS
HTML
Jquery
Photoshop
Google images

Creation of the game started with pseudocoding the design and the key functions. I wanted to keep the look of the original game and have toggling color button interactivity.

I researched a couple mastermind games for inspiration, from there I laid out a loose html with background image and title. I set up divisions, ids and classes and did some basic CSS on them.

The lion's share of the work was really three things:

1- the toggling color buttons. I had set them up and devises how to rotate out the colors and the string names into the guess array but needed to find a rotating counter (to cycle through the 6 colors, then start over). Through Dan Lawrence's help, I used a Modulus function to accomplish that.

2- the comparator for the colors that were match but in both right and wrong positions. setting up the former was simple, the latter was harder but solved by a combination of two nested loops + simply changing the name of matches within a function temporarily to prevent misleading matches.  

3- The last was creating all the functionality of the rounds, keeping their individual functions and results, yet avoiding writing all the code 10x times. A couple loop functions with proper e.currentarget/pass through code steps achieved this.

The game is sinply an index.html launch. No other special instructions to start playing is needed.

Their aren't many bug in the program. There is functionality in buttons that have already been guessed I would like to have removed, but changing them after submission only hurts the player ability to win the game.

Access to the game can be done below

https://neelyre.github.io/project_1/mastermind/index.html

Access to all the files can be done below

https://github.com/neelyre/neelyre.github.io/tree/master/project_1/mastermind
