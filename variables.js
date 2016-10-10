
// intentially made global by leaving off var before variable
log = console.log.bind(console);

var defaultName = 'Young Mi';

function sayHello(name) {
    if (name === undefined) {
        console.log('Hello, ' + defaultName + '!');
    }
    else {
        console.log('Hello, '+ name + '!');
    }
}
//sayHello();
/*sayHello('jin');
sayHello('Eunheh');
sayHello('Emily');*/

//console.log(global);
//console.log('Hello');
var transportationName = 'Outback';
var transportationType = 'Car';
var $cost = 'Too Much';
var _green = true;
var transportationNumber1 = true;
var snake_case_variable_is_okay = true;
var camelCaseIsBest = true;

var thisIsAVariable = true;
let thisBeTrue = true;
const thisNeverChange = true;

function testVariables() {
    var thisIsNotAvailableOutside = true;
    console.log(thisIsAVariable);
}

//console.log(thisIsNotAvailableOutside);

if (true === true) {
    let thisIsNotAvailableOutside = true;
}
//log(thisIsNotAvailableOutside)


//cont thisCannotCHange = true;
//thisCannotCHange = false;

var firstName = 'Young Mi';
//firstName = "Eunheh";

var lastName;
//console.log(lastName); //<--output at this point in the code

var thisIsUndefined;
var thisIsNull = null;
var thisIsBoolean = true;
var thisIsNumber = 12.34;
var thisIsString = 'My favorite number is 12.34'
var thisIsExpression = (1+1);
//var thisIsInput = inputs.first_name;

var titleOfMovie= 'Gladiator';
var authorArtist = 'forgot name';
var year = '1990';
var genre = 'action';
var isMovie = true;

//console.log(titleOfMovie, authorArtist, year, genre, isMovie)

var verb = 'ran';
var sentence = 'Flying by the tower, I' + verb + ' to safety.';
//console.log(sentence);

//var verb = '1';
//var sentence = 12 + number(verb) + 12;
//console.log(sentence);

var verb = 'ran';
var sentence = `Flying by the tower, I ${verb} to
 safety.`;
console.log(sentence);

var on = false;
var lightSwitch = (on ? 'The light is on.' : 'The light is off.');
console.log(lightSwitch);
