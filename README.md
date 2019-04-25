# HALPQ
**HALPQ** is a support ticketing system built using React, React-Router and Google Firebase. Bootcamp students during open space time often have questions related to the material taught in class that week, this provides a easy way for students to request assistance from a mentor or instructor. After you log in, you can join classrooms you have access to, otherwise input the classroom ID provided to you when you started the bootcamp at HackerYou. Students can ask questions, mark them as being helped and archive questions. Users who have been given an admin role can create and delete classrooms (all backed by Google Firebase), change access levels for any user, start a chat with real time chat with a student and so much more. All authenication is handled by Google authenication.
 
## Getting Started
HALPQ was built using the Create React App starter. 

1. Once the project has been cloned into your project directory, install dependencies by running `npm install` or `yarn install` from the command line. Next, run `npm start` or `yarn start` to open your application in your local environment.

2. Log in using your Google username and password. If you've joined for the first time you'll have to request to be made an admin, otherwise enter your classroom ID using the button in the bottom corner to input this value. You should have recieved an ID when you started the HackerYou bootcamp.

## Features
* RBAC security model, all users are students by default can be promoted to an admin access level by another user who is an admin. 
* Real time chat within each question can be started only be users who have an Admin security role assigned, this decision was made to avoid students asking other questions within the chat system and overall simplifies the application design. 
* Responsive web design completed using only CSS floats, use of Flexbox/CSS Grid were out of scope as per the client brief.
* Full mobile client useable by staff to quickly move through HackerYou facilities to quickly answer student questions
* It was designed after the current HelpCue system already in place, a mashup of the current styling while maintaining the modern HackerYou brand were important for this project.
* React Router was used heavily throughout this project to allow for users to move through the application without seeing any page refreshes.
* Google authentication is heavily used throughout the application, as well users account photo and username are displayed while logged in. 
* Classrooms are used to segment bootcamp and part time students, each classroom can be created by an user with an admin role assigned from the main page of the application. 



## Technologies and Frameworks Used
This project was built in React (bootstrapped with [Create React App](https://github.com/facebook/create-react-app)) and styled using Sass. The application was deployed to Netlify and the [prod site](https://thehalpq.ca/) is connected to Google Firebase for persistant storage.

## Authors
* Amy Ludwig: [Github](https://github.com/amyludwig)
* Dan Ditomaso: [Github](https://github.com/danditomaso)
* Valentyn Vasylenko: [Github](https://github.com/vasylenkoval)


This project was made as part of the [HackerYou Web Development Immersive program](https://hackeryou.com/courses/bootcamp).

