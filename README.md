# starwars-character-names

[![Build Status](https://travis-ci.org/KeilCarpenter/starwars-character-names.svg?branch=1.1.0)](https://travis-ci.org/KeilCarpenter/starwars-character-names)
[![npm monthly downloads](https://img.shields.io/npm/dm/starwars-character-names.svg?style=flat-square)](https://www.npmjs.com/package/starwars-character-names)
[![current version](https://img.shields.io/npm/v/starwars-character-names.svg?style=flat-square)](https://www.npmjs.com/package/starwars-character-names)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Library for getting starwars character names by different search criteria

## Installing
```javascript
npm install --save starwars-character-names
```

## Usage
```javascript
// require module
var starWarsNames = require('starwars-character-names');

// returns an array of all names
var allNames = starWarsNames.filter.all;

// returns single random name
var randomName = starWarsNames.filter.random();

// returns an array of n number of names
var fourNames = starWarsNames.filter.random(number);

// returns array of names with the first name beginning with user defined char
var firstNamesByChar = starWarsNames.filter.byFirstCharOfFirstName(char);

// returns array of names with the second name beginning with user defined char
var secondNamesByChar = starWarsNames.filter.byFirstCharOfSecondName(char);
```