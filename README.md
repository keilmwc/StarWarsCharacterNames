# starwars-characters

Library for getting random names of starwars characters

## Installing
```javascript
npm install --save starwars-character-names
...

## Usage
```javascript
// require module
var starwarsNames = require('starwars-character-names');

// return all names
var allNames = names.all;

// returns single random name
var randomName = names.random();

// returns n number of names
var fourNames = names.random(4);
...