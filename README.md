# React User Directory
User Directory built with React

![GitHub top language](https://img.shields.io/github/languages/top/ac0712148/react-user-directory)
![github-repo-size](https://img.shields.io/github/repo-size/ac0712148/react-user-directory)
![github-last-commit](https://img.shields.io/github/last-commit/ac0712148/react-user-directory)


## Links
App: https://ac0712148.github.io/react-user-directory/
Repo: https://github.com/ac0712148/react-user-directory


## Table of Contents
  * [Description](#description)
  * [Technology Specs](#technology-specs)
  * [Installation and Dependencies](#installation-and-dependencies)
  * [Purpose](#purpose)

## Description

  For this project we design and build a directory for users with React. The application renders a table populated with random users from https://randomuser.me/. One feature in this application is that the user can search the first name of a user in the table and dynamically render the table with matching the matching search.

## Technology Specs

  This application is created using `create-react-app` which is used for `React` applications. We implement various components to render different parts of the application but use the `userDirectory` component to manage the logic behind the functionality. Our data is generated from an api request using `axios` to fetch the response.

  ## File Structure
```
.
|
├── package.json
│
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
|
├── src
│   ├── components
|   |   ├── Header.js
|   |   ├── RowData.js
|   |   ├── SearchForm.js
|   |   ├── Table.js
|   |   └── UserContainer.js
|   |    
|   ├── utils
|   |   └── API.js
|   |
|   ├── App.js
|   └── index.js
|
└── .gitgignore
```

## Installation and Dependencies

 To install and this project in you local host, clone this repo to a folder you wish to keep the project. Make sure you have this projects' `package.json` in your directory. If this requirement is met, then simply run the following command to install dependencies:
```
npm install
```
 Then, once the dependencies are installed, run the following command to run the React application.
```
npm start
```

## Purpose

 The purpose of this project is to demonstrate the use of React to create components and manage states. We use these technologies to demonstrate components rendering instead of rendering entire pages for a single change in the application.

