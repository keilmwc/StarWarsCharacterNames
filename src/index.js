const starWarsNames = require('./starwars-names.json');
const uniqueRandomArray = require('unique-random-array');
const getRandomItem = uniqueRandomArray(starWarsNames);

module.exports = {
  all: starWarsNames,
  random: random,
    byChar: getNameByFirstChar
};

function random(number){
    if(number === undefined){
        return getRandomItem();
    }else{
        var randomItems = [];
        for(var i = 0; i < number; i++){
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}

function getNameByFirstChar(char){
    var names = [];
    for(name in starWarsNames){
        if(char === starWarsNames[name].charAt(0)){
            names.push(starWarsNames[name]);
        }
    }
    if(names.length > 0){
        return names;
    }else{
        return 'No names beginning with ' + char;
    }
}
