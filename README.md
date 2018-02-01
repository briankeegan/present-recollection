# Present Recollection

## About

My fiance is has always been the best gift giver.  It always blew my mind when she continuesly picked the prefect present.
How did come up with the brilliance?
The solution? Simple!
Everytime one her friends/family mentioned something that they liked she would simply write it down!

What I would like to design is a way to keep track of all your friends familys gift ideas.
Initially it would just be a list, of gifts, each associated with a person and DOB.

If I have I'd like to only show a person, and on click, list the present ideas.
Maybe orginzational options would be cool as well!

Who would use this? Who wouldn't use this!
Your mom! Your dad! Your siblings!  Any good friend.

## How to Use

content goes here!

## Technologies Used

1.    HTML5
1.    SCSS
1.    JavaScript
1.    jQuery
1.    Ajax
1.    Bootstrap



### User Stories
#### Version 1
As a super user I want to be able to organize the view in which I see my gifts, by DOB, by date thought of, alphabetically, etc.
As a user I want to:
   - sign up and log in to a private account.
   - sign out
   - change my password

As a logged in user I want to:
   - view a single gift idea
   - view all gift idea
   - create a single gift idea
   - edit a single gift idea
   - delete a single gift idea

As a coder I want access to the files via github

As a coder/employer I want a clear README doc, to:

 - explain the process of creating the game
 - List technologies used
 - List problems/tricky parts of the code
 - Link wire-frame and story
 - Explain any thing that the designer would improve in the future

#### Version 2
As a super user, I want to be warned before I delete any of my data.
As a logged in user I want to:
   - view a single friend idea, and access all his gifts
   - view all friends
   - create a single friend reference, with DOB, and nickname attributes
   - edit the content of a friend, in case their nickname changes, or I made a typo
   - delete a single friend, and all gifts associated with it.

### Some stretch goals
 As a Super-User I want to:
   - Be able to organize my friends by closest b-day.
   - Notify me of my friends closest birthday
   - Have page themes, that are remembered when I log out
   - Able to search search for my gift ideas on ebay or amazon with one click

##    Wireframes
[wireframe](https://projects.invisionapp.com/freehand/document/Jn0SGLpJr) 1.0

## General Strategy
Build API for gifts
 - Gonna use scaffold, and check work.
 - Check migrations and scema
 - check all routes work
 - Migrate in testing enviorment.
 - When ready heroku
 - The challenge will be requiring authentication from user
Build front
 - Gonna start by building basic bootstrap skeleton
 - Check sign/in/out etc.
 - Connect to gift API, and test.
 - CHeck that I'm meeting all spects.
 - Fix up UI.
Start clean branch for addons

Build up API for friends
- Gonna use scaffold, and check work.
- Create migration for updating gifts to have merely a reference to friends.
- Double check migrations and schema
- check all routes work
- Migrate in testing enviorment.
- When ready heroku
Build front, connect to back
 -  Connect to friends API, and test.
 - Check that I'm meeting all specs.
 - Fix up UI.
