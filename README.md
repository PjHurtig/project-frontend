# HikeBikeClimb

Developer: Jonatan Hurtig

![Mockup image]()

[View live website]()

## Table of Contents

0. [About](#about)

1. [Project Goals](#project-goals)

   1. [User Goals](#user-goals)

2. [User Experience](#user-experience)

   1. [Target Audience](#target-audience)
   2. [User Requirements and Expectations](#user-requirements-and-expectations)
   3. [User Stories](#user-stories)
   4. [Site Owner Stories](#site-owner-stories)

3. [Wireframes](#wireframes)

4. [Technologies Used](#technologies-used)

   1. [Languages](#languages)
   2. [Libraries, frameworks and dependencies](#libraries-frameworks-and-dependencies)
   3. [Tools & Programs](#tools--programs)

5. [Agile Design](#agile-design)

6. [Design](#design)

   1. [Colors](#colours)
   2. [Fonts](#fonts)

7. [Project Structure](#project-structure)

   1. [Front End](#front-end)
   2. [Back End API](#back-end-api)

8. [Features](#features)

   1. [Implemented Features](#implemented-features)
   2. [Features to be Implemented](#features-to-be-implemented)

9. [Validation](#validation)

   1. [CSS](#css)
   2. [Html](#html)
   3. [Lighthouse](#lighthouse)
   4. [ESLint](#eslint-validation)

10. [Testing](#testing)

11. [Deployment](#deployment)

    1. [Deploying in Heroku](#deploying-the-website-in-heroko)
    2. [Forking of Github repo](#forking-the-github-repository)
    3. [Cloning the Github repo](#cloning-the-repository-in-github)

12. [Credits](#credits)

    1. [Image](#images)
    2. [Code](#code)

13. [Thank You](#thank-you)

# About

 - HikeBikeClimb is a site for users that likes to hike, ride bikes, and/or climb. The site gives the user tools to create and view events in these categories of sport, and to collect their specific gear in gear lists that they can update as they update their gear, to keep track of and inspire other users that are interested in different gear set ups. A user can also add posts to update the other users on the site about their journey and milestones in these sports.

### Developer Statement


## Project Goals

 - The goal for this project was to create a place for enthusiasts of theese sports to come togehter and share information, inspiration and meet up at events big and small.

Key functionality Goals
 - comprehensive navigation
 - User authentication
 - User profiles with users posts, gearlists and events
 - CRUD functionality for profiles, events, posts, comments, gear lists and gear items
 - Filtering of events, posts, gear lists by profile

### User Goals

 - Ability to create a events, posts and gearlists with items
 - Add comments to posts
 - Update or delete content where needed
 - Filtering events, posts and gearlists by profile
 
## User Experience

### Target Audience

 - The target audience for HikeBikeClimb is peaople that likes to hike, ride bikes, and/or climb and want tools to extend these interests in to a network of likeminded, .

### User Requirements and Expectations

 - A responsive and visually clean design
 - Intuitive, efficient navigation 
 - A purpose-driven application for a specific demografic


### User stories

 - As a user I want to be able to create posts and comments and also update them so that I kan keep them up to date and standard
 - As a user I can create events and update them so that I kan keep them up to date and standard
 - As a user I can create gear lists with gear items and update them so that I kan keep them up to date and standard
 - As a user I can see other users profiles with their own posts, events and gear lists

#### Navigation & Authentication

 - Navigation: As a user I can view a navbar from every page so that I can navigate easily between pages
 - Routing: As a user I can navigate through pages quickly so that I can view content seamlessly without page refresh
 - Authentication - Sign up: As a user I can create a new account so that I can access all the features for signed up users
 - Authentication - Sign in: As a user I can sign in to the app so that I can access functionality for logged in users
 - Authentication - Logged in Status: As a user I can tell if I am logged in or not so that I can log in if I need to
 - Authentication - Refreshing access tokens: As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
 - Navigation: Conditional rendering - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
 - Avatar: As a user I can view user's avatars so that I can easily identify users of the application

#### Events
 - Create Events: As a logged in user I can create events so that other users can see them and attend if they want
 - View Events in Calendar: As a user I can see the events in the calendar and click on them to go to the detailed view
 - View Events in Profile pages: As a user I can see all the events that a specific user (including myself) has created on their profile and click on them to go to the detailed view


#### Gear Lists and Gear Items

 - Create Gear Lists: As a logged in user I can create gear lists so that i can keep track of my gear and other users can see them
 - View Gear Lists in Profile pages: As a user I can see all the gear lists with the added gear items that a specific user (including myself) has created on their profile and click on them to go to the detailed view
 - Add, Delete Edit Gear Items: As a logged in user I can add gear items to my gear lists and edit or delete them to keep them up to date.
 

#### Posts and Comments
 - Posts List: As a user I can see all posts added in the homepage by all users
 - Create Posts: As a logged in user I can create posts so that other user can see what i am up to
 - Comments: As a logged in user I can comment on posts, edit or delete them to keep the comments relevant and up to date.
 - View Posts in Profile pages: As a user I can see all the posts that a specific user (including myself) has created on their profile and click on them to go to the detailed view

#### The Profile Page


### Site Owner Stories

 - As a site owner I can provide full access to logged in user so that they can interact with the pages more independently
 - As a site owner I can restrict the interaction with website so that an unauthorised user cannot make changes in the app
 - As a site owner I can make sure my site is responsive so that user can view the website in all devices without any problem


## Wireframes
![Desktop wireframe]()
![Mobile Wireframe]()


## Technologies Used

### Languages

- HTML
- CSS
- Javascript
- React


### Libraries, frameworks and dependencies

- [Axios](https://axios-http.com/docs/intro) - axios were used for promise-based HTTP. Justification: I used axios to send API requests from the React project to the API and avoid any CORS errors when sending cookies.
- [JWT](https://jwt.io/) - library to decode out JSON Web token. Justification: I used JWT to prevent unauthenticated user from making extra network requests to refresh their access token. Also used to remove the timestamp from the browser when the user refreshes token expires or the user logs out.
- [React-Bootstrap 4.6](https://react-bootstrap-v4.netlify.app/) - Justification: I used Bootstrap React library for UI components, styling and responsiveness.
- [React Infinite Scroll](https://www.npmjs.com/package/react-infinite-scroll-component) - Justification: I used this component to load content (posts/comments) automatically as the user scrolls towards the bottom of the page without having to jump to next/previous page.
- [React Router](https://v5.reactrouter.com/web/guides/quick-start) - used for dynamic routing. Justification: I used this library to enable the navigation among views of various components and control what the user sees depending on the URL they have accessed in the browser.
- [ES7 Snippets](https://open-vsx.org/extension/dsznajder/es7-react-js-snippets): this was used for keyboard shortcuts when creating jsx functions

### Tools & Programs

- [Am I Responsive](http://ami.responsivedesign.is/) was used to create the multi-device mock-up at the top of this README.md file
- [Chrome dev tools](https://developers.google.com/web/tools/chrome-devtools/) was used for debugging of the code and checking site for responsiveness
- [Cloudinary](https://cloudinary.com/) to store static files
- [Font Awesome](https://fontawesome.com/) - Icons from Font Awesome were used throughout the site
- [Google Fonts](https://fonts.google.com/) - import of font for the website
- [CodeAnyWhere](https://app.codeanywhere.com/) was IDE used for writing code and to push the code to GitHub
- [GitHub](https://github.com/) was used as a remote repository to store project code
- Validation:
- [WC3 Validator](https://validator.w3.org/) was used to validate the html
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) was used to validate the css
- [ESLint](https://eslint.org/) used to validate JSX code
- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) used to validate performance, accessibility, best practice and SEO of the app


## Agile design

### About

Agile project management

### User Story Template

- Using Github issues first I created the template for a user story that was later used to create user stories.


### Kanban Board

I used a Kanban board to provide visual clarity and task tracking.


## Design

### Colours

The colours used in the design were taken from [coolors.co](https://coolors.co/)

![Color Palette]()


### Fonts

The font usesd throughout the site is [Poppins](https://fonts.google.com/specimen/Poppins?query=Poppins) from google fonts


## Project Structure

### Front-End

#### React

Utilizing React in this project 


### Back-End API

#### Django REST Framework

The API for this Front-End application was built with the Django REST Framework. The repository with a README file for the DRF Back-End can be found [here().

##### Back to [top](#table-of-contents)

## Features

### Implemented Features

#### Navigation(Navbar)
NavBar Logged in

![NavBar Logged in](documentation/assets/navbarloggedin.png)

NavBar Logged out

![NavBar Logged out](documentation/assets/navbarloggedout.png)

NavBar Mobile

![NavBar Mobile](documentation/assets/navbarmobile.png)

NavBar Mobile Expanded

![NavBar Mobile Expanded](documentation/assets/navbarmobileexpanded.png)





#### Sign Up Page



![Signup Page]()

#### Sign In Page



![Signin Page]()

#### HomePage



##### Active Profiles (Our Top Users)



#### Profile Page



![Profile Desktop]()
![Profile Mobile]()



#### Profile Edit Page



![Edit Dropdown Mobile]()
![Edit Profile Page]()


#### Change Username Page

![Change Username Page](documentation/assets/changeusername.png)


#### Change Password Page


![Change Password Page]()

### Unresolved Bugs


### Future Enhancements


##### Search form and filters


## Validation

### CSS

- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/)was used to validate the css in the project.



### Html

- [WC3 Validator](https://validator.w3.org/) was used to validate the html in the project


### Lighthouse

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/) for performance, accessibility,

Home

![Home Lighthouse]

Home after amendments

![Home lighthouse after amendments]

Home Mobile

![Home Lighthouse Mobile]
Home Mobile after amendments

![Home Lighthouse Mobile after amendments]()

Profile
![rofile Desktop]()


### ESLint Validation

- The JSX code was validated using the ESLint utility.



## Testing

Please see [Testing]() 
 
## Deployment

### Deploying the website in Heroko

- Before deploying in Heroku, a Procfile was created: Very important for deployment and must be added with capital P. This file instructions Heroku which server to use

#### Login or create an account at Heroku

- Make an account in Heroko and login

#### Creating an app

- Create new app in the top right of the screen and add an app name.
- Select region
- Then click "create app".


#### Open settings Tab

##### Click on config var

- No key or value was added as it is already connected to API


##### Add Buildpacks

- Add python buildpack first
- Add Nodejs buildpack after that

#### Open Deploy Tab

##### Choose deployment method

- Connect GITHUB
- Login if prompted


##### Connect to Github

- Choose repositories you want to connect
- Click "Connect"



##### Automatic and Manual deploy

- Choose a method to deploy
- After Deploy is clicked it will install various file


##### Deployment

- Project was deployed in Heroku



### Forking the GitHub Repository

1. Go to the GitHub repository
2. Click on Fork button in top right corner
3. You will then have a copy of the repository in your own GitHub account.
4. [GitHub Repository()

### Cloning the repository in GitHub

1. Visit the GitHub page of the website's repository
2. Click the “Clone” button on top of the page
3. Click on “HTTPS”
4. Click on the copy button next to the link to copy it
5. Open your IDE
6. Type `git clone <copied URL>` into the terminal

## Credits

### Images


### Code



## Thank You
