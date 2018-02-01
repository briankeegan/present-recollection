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

I wanted to make simple easy to use app, one that I will use.



## How to Use

1.  Create Account
2.  Log in
3.  Add a friend
  1. If you mispell your friends name, or write the wrong birthday, go edit friend
  2. If you want to remove a friend from the list click delelete and confirm deletion
4. Click on your friend to create a gift / view gifts associated with that friend
5. Add a gift to that friend.  You'll know which friend because their name will be at the top
  1. If you want to update the gift, press update, and you can go ahead and edit!
  2. If you have bought the gift for your friend, or think it's no longer a great idea click delete, and then confirm deletion
6.  You now have no good reason to forget your friends presents ideas! Just write 'em down!



## Technologies Used

1.    HTML5
1.    SCSS
1.    JavaScript
1.    jQuery
1.    Ajax
1.    Bootstrap
1.    Handlebars



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
Build [API](https://github.com/briankeegan/present-recollection-rails-api) for gifts
  See [README.md](https://github.com/briankeegan/present-recollection-rails-api/blob/master/README.md)
Build front
 - Gonna start by building basic bootstrap skeleton
 - Check sign/in/out etc.
 - Connect to gift API, and test.
 - CHeck that I'm meeting all spects.
 - Fix up UI.
Start clean branch for addons

Build [API](https://github.com/briankeegan/present-recollection-rails-api) for friends
  See [README.md](https://github.com/briankeegan/present-recollection-rails-api/blob/master/README.md)
Build front, connect to back
 -  Connect to friends API, and test.
 - Check that I'm meeting all specs.
 - Fix up UI.

##    Development

### Setup
  - [x] Download GA's front end template (thanks [General Assembly](https://generalassemb.ly/)!)
  - [x] Deploy to github
  - [x] Create basic layout (used code from previous project as template)
  - [x] Test that hooks up to user interface as expected

### Version 1
*  Before startin front-end version one, I completed version one of the [API](https://github.com/briankeegan/present-recollection-rails-api)

####    Create gift component - following CRUD

###### Create

*       I used a bootstrap modal attached to the navbar and sent data on submit
     - [x]  Create basic New Gift interface as close to [wireframe](https://projects.invisionapp.com/freehand/document/Jn0SGLpJr) as possible to gifts.
      - [x]  Create event and link to api
      - [x]  Create api connection
      - [x]  Back in event add `.then` method to api, so ui runs after success or failure
      - [x]  Create ui method to display failure or success message
      - [x] Test test teset!

###### Read

  *   For interface I set it up such that after login my `div#content` would be filled with data from handlebars.
    - [x]  Create basic show interface as close to [wireframe](https://projects.invisionapp.com/freehand/document/Jn0SGLpJr) as possible to gifts.
    - [x]  Create event and link to api
    - [x]  Create api connection
    - [x]  Back in event add `.then` method to api, so ui runs after success or failure
    - [x]  Create ui method to display failure or success message
    - [x]  Use hanlebars to generate html and display within `div#content`

###### Update

  - [x]  Create basic update interface as close to [wireframe](https://projects.invisionapp.com/freehand/document/Jn0SGLpJr) as possible to gifts.
  - [x]  Create event and link to api
  - [x]  Create api connection
  - [x]  Back in event add `.then` method to api, so ui runs after success or failure
  - [x]  Create ui method to display failure or success message
  - [x]  Connect to Read methods, so a GET request is sent after completion of update, thus content is updated!

###### Delete

  - [x]  Create basic delete interface as close to [wireframe](https://projects.invisionapp.com/freehand/document/Jn0SGLpJr) as possible to gifts.
  - [x] To do this, I wanted a delete confirmation.  I acheived this by using bootraps popover. (If your curious please reach out!)
  - [x]  Create event and link to api
  - [x]  Create api connection
  - [x]  Back in event add `.then` method to api, so ui runs after success or failure
  - [x]  Create ui method to display failure or success message
  - [x]  Connect to Read methods, so a GET request is sent after completion of update, thus content is updated!

##### Autofill Update modal

*     Add event to update button which on click does the following:
  - [x] Run a get request for a single resource with id number stored in `data-set` of button
  - [x] Pass that information to `ui` which uses data to fill `handlebars` template.
  - [x] Fill update modal with content
  - [x] Update submit button to point to `#content`'s update form



### Version 2
*  Before startin front-end version two, I completed version two of the [API](https://github.com/briankeegan/present-recollection-rails-api)

####    Create friend component - following CRUD

###### Create Friend
*   The road got easier, as I followed along almost exactly to what I did with the gift component.
*  As I progressed I added more handlebars.
    - [x]  Create following same steps as before.
    - [x] This time, add create button to `handlebars` file itself

###### Read friend's

  *   Took over for gifts, so now friends are displayed on login
    - [x]  Create component
    - [x]  Use handlebars so it is generated


###### Update friend

  *   Exact same strategy as with update gift.
  *  Get single friend resource, and use that to populate same modal.


###### Delete friend

  *   Similar stategy.  Add confirmation of delete, but in order to reuse the popover confirmations, created seperate module which takes an array like object and a name as string, and attaches popoever to each according to `data-id`
  *  If you're curious please see this [commit](https://github.com/briankeegan/present-recollection/commit/30bca1c1f31c5c949a2153c1dc6b844db02a5ef6)!

### Version 2.5
*  With the change of API, gifts are not associated with friends.
 -  [x]  On click of friend generate handlebars display of gifts using id from `data-id`
  - [x] Show friends gifts on click
  - [x] Connect back button to display friends
  - [x] Reconnect popovers to gifts (things have changed!)
  - [x] Complete gift delete component
  - [x] Complete modify gift component


### Final touchups
-  [x]  Only use one modal by storing all modal content in 'handlebars' files
- [x] Change password old and new must be different.  If not will recieve an error
- [x] Change styling (particularly navbar)


### Difficulties
  -  Some of the biggest challenges where using bootstrap in a dynamically created enviorment.
  - With help (see credit below!) I was able to overcome most of the problems but the popover issue took me a very long time.

### Future iterations
 -  Make less calls to api, and store more locally
 -  I would like to show number of gifts a friend has with badges
 -  Have different options to organize List
 -  Beatify all of UX.


### Credit
I would like to thank:

- [Kate](https://git.generalassemb.ly/lindsayka9) for many API problems, and showing me the right way to generate migrations.


-	[Kostant](https://github.com/Ko-stant) Helping me with the API serializer

-	[Shuan](https://github.com/skinnybuff) for reviewing my layout, page and coming up with idea of added badges (counter) to friends so you know how many gift ideas you have.

-	[Sophia Derugen-Toomey](https://github.com/quidprocrow)  reviewing my, and just chatting about the project!  Plus for the awesome stretch goal of sending emails to users when their friends bday is coming up.

- 	[GA](https://generalassemb.ly/) staff for creating API, and templates and helping with issues nights days and weekends.  THANK YOU!

-  Michael Finnernan for being an amazing mentor and helping me with Bootrap jQuery questions, and so much more!

-  [Paulund](https://paulund.co.uk/capitalize-first-letter-string-javascript) for writing this fun little capitalize function.

-  And of course Amber my lovely lady for inspiring me create this project.  May I gift as well as you! (I've now got the tools!)
