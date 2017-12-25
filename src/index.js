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

    switch(true){
        case ((typeof char === 'string') && (char.length === 1)):
        {
            char = char.toUpperCase();
            for(name in starWarsNames){
                if(char === starWarsNames[name].charAt(0)){
                    names.push(starWarsNames[name]);
                }
            }
            switch (true){
                case ((names.length > 0)):
                {
                    return names;
                }
                default:{
                    return 'No names beginning with ' + char;
                }
            }
        }
        case ((typeof char !== 'string')):
        {
            return "Expecting a string but got a " + typeof char;
        }
        case ((char.length !== 1)):
        {
            return "Char must be of length one, got " + char.length;
        }
    }
}
