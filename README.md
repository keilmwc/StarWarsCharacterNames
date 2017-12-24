# starwars-characters

Library for getting random names of starwars characters

## Installing
```javascript
npm install --save starwars-character-names
```

## Usage
```javascript
// require module
var starWarsNames = require('starwars-character-names');

// returns an array of all names
var allNames = starWarsNames.all;

// returns single random name
var randomName = starWarsNames.random();

// returns an array of n number of names
var fourNames = starWarsNames.random(number);

// returns array of names beginning with user defined char
var namesByChar = starWarsNames.byChar(char);
```