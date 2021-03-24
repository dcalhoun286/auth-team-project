# auth-team-project

Deployed application: [Heroku](http://dc-auth-team-project.herokuapp.com)

## Authors

- Jenner Dulce
- Taylor Thornton
- Dar-Ci Calhoun
- Nassir Abegaz
- Ryan Tipper

## Problem Domain

Create a new application using your API Server and Authentication System.

## Setup

### GitHub

1. Create a new repository at GitHub, called `auth-project`
  1. Select the "Add a README" option
  1. Select the "Add a .gitignore" option, and choose Node.js
  1. Opt for the MIT license
1. Clone this repository to your local machine.
1. Create a "dev" branch to do your work in: `git checkout -b dev`

### Heroku

- Install Heroku CLI to your local machine.
- [Click here](https://developer.mongodb.com/how-to/use-atlas-on-heroku/) to finish Heroku setup.

### The Code

1. Initialize your app: `npm init -y`
1. Run `npm install`
1. Install your dependencies: `npm i base-64 bcrypt cors dotenv ejs express jsonwebtoken method-override mongoose morgan`
1. Create the files and folders required for the application
1. Create the correct content in the files
1. Test your server: `npm test`
1. Start your server: `node index.js`
  1. Visit [http://localhost:3000/](http://localhost:3000/) in your browser to confirm that the server is visible
