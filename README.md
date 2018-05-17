# Jasmine testing project

## Table of Contents

* [About](#about)
* [Dependencies](#dependencies)


## About

This project tests the functionality of the feed loader. In order to run the tests you would need to run the index.html file from the dist folder in a browser. The tests might take a bit of time to complete due to the loading of the feeds.

## Dependencies

The app.css styles the whole page. Adjusts the font sizes, colors and position of the elements.
Some of the fonts are taken from google fonts.
("http://fonts.googleapis.com/css?family=Roboto:400,100,300,700").

The app.js file is responsible for the functionality of the feed loader and all of the page's elements.

The feedreader.js is responsible for the testing of some of the objects found in app.js.

The jasmine, jasmine-jquery and jquery is used throughout this project both in the testing files and in the main app.js file.
(The jasmine-jquery file can be found in the jasmine/lib/jasmine-2.1.2/jasmine-jquery.js).
("http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js")

The normalize.css corrects some of the issues regarding the styling not working as aspected or just simply not working in other browsers.

Gulp is used to reload the page on save for easier working experience. Also the gulp is used for the converting of the feedreader.js from ES6 to ES2015. Also it is used for adding prefexis to the css elements.

Node.js and npm.js is also required to be able to use the gulp functionality. As well as the package.json file which has all of the dependencies for the gulp and babel functionality.