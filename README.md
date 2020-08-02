<h1 align="center">
  Trivia Fighter Turbo v2.0
</h1>

Are you ready to fulfill your destiny and become the greatest trivia fighter of all time?

The adventure you seek is back!

**[PLAY NOW](https://trivia-fighter-web.netlify.app/)**

## Description

## Context

Computer games have become an integral part of our daily lives now. From big platform productions like God of War to addictive smartphone essentials like Farmville, there are millions of cool games to choose from. Unfortunately, I feel like it is still hard to find titles that can replicate the excitement and the amusement retro arcade games.

I was looking for ideas to practise my [JAMStack](https://jamstack.org/) skills. That is why I decided to revitilize an [older project](https://github.com/cemergin/TRIVIA-FIGHTER-TURBO) where I tried paying homage to "the good old days" by creating an arcade style game application.

## Features & Architecture

### Tech Stack

1. React
1. Gatsby
1. Netlify
1. Hasura

## To-Do

## How to Play

### Stay in the fight

Trivia Fighter Turbo presents you arcade style trivia in a web browser! Compete in upto 20 rounds of multiple choice questions to get the highest score and put your name on the leaderboard.

Game is over if you guess wrong or if you run out of time.

Trivia Fighter Turbo gets its questions from [Open Trivia DB](https://opentdb.com/). Be prepared for questions from +20 different categories!

### Stronger the opponent, bigger the prize

Questions come at random difficulty levels, at every new round. Fortune might favor you with a flurry of easy questions or one difficult opponent might be your end. On the bright side, harder questions yield more points!

1.  Easy = 100 Points
1.  Medium = 200 Points
1.  Hard = 500 Points

### Keep an eye out for time

Every round 10 more seconds are added to your timer. If the timer runs out before you can answer a question, game is over. Use the time wisely if you want to reach the top!

### Make History

Beat other fighters' scores to put your name on the map. Check the leaderboard frequently to see if you still qualify for the top 10.

## 🚀 Quick start

1.  **Install the Dependencies.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    npm install -g gatsby-cli
    npm install netlify-cli -g
    ```

1.  **Start Playing.**

    ```shell
    cd trivia-fighter-web
    npm install
    netfliy dev
    ```

1.  **Open the source code and play!**

    The site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    \_Note: Netlify will serve your functions from a different port than 8000. Keep an eye out for a message like "Functions server is listening on 53088". You can use your own browser or an application like Postman to test the endpoints.\_

### 🧐 What's inside?

A quick look at the top-level files and directories

    .
    ├── node_modules
    ├── functions
    ├── public
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that the project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory contains all of the code related to what will be displayed on the front-end of the site (what you see in the browser) such as the site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

13. **`functions`**: This directory contains all of the code that is used by Netlify to create serverless Lamda functions.

14. **`public`**: This directory contains all the static assets of the web application that are served by Netlify.
