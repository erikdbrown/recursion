// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  // var position = 0;
  // // var charAtPosition = json.charAt(position);
  // // function to look at the next value
  // var next = function(charPosition) {
  //   var start = json.charAt(charPosition);
  //   return json.charAt(charPosition + 1);
  // }

  // // funciton to traverse the string until it finds specific markers
  // // { start of an object
  // // [ start of an object
  // // ' start of a string
  // // : end of a key
  // // , end of a value

  // var whatIsIt = function(pos) {
  //   position = pos;
  //   var startValue = json.charAt(position);
  //   position++;
  //   if (startValue === '{') {
  //     return objectParser();
  //   } else if (startValue === "'" || startValue === '"') {
  //     return stringParser();
  //   } else if (startValue === '[') {
  //     return arrayParser();
  //   } else if (startValue === '{') {
  //     return objectParser();
  //   } else {
  //     position--;
  //     return numBooAndNullParser();
  //   }
  // };

  // var stringParser = function() {
  //   var string = '';
  //   var character = json.charAt(position);

  //   while (character !== '"' && character !== "'") {
  //     console.log(character + next(position))
  //     if (character + next(position) === "\\'") {
  //       console.log('found it: ' + character + next(position))
  //       string += character + next(position);
  //       position += 2;
  //     } else {
  //       string += character;
  //       position++;
  //     }
  //     character = json.charAt(position);
  //   }
  //   console.log(position);
  //   return string;
  // }


  // // {"menu":{"id":"file","value":"File","popup":{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}"
  // // parses through an string and returns the array
  // var arrayParser = function() {
  //   var returnArray = [];
  //   var value;

  //   while (json.charAt(position) !== ']') {
  //       value = whatIsIt(position);
  //       if (next(position) === ',') {
  //         returnArray.push(value);
  //         position += 2;
  //       } else if (next(position) === ']') {
  //         returnArray.push(value);
  //         position++;
  //       }
  //     }
  //     // if (returnArray[returnArray.length - 1] === returnArray[returnArray.length - 2])// if the last two values in the array are the same
  //     // check the length of the second value in the array
  //     // move the position to the end of the second spot
  //     // run whatIsIt
  //     // if the result is not the same as last value in array, change value.
  //     // moves the position to the closing brack in the json string
  //   return returnArray;
  // }


  // var objectParser = function() {
  //   var returnObject = {};
  //   var key = '';
  //   var value;

  //   while (next(position) !== '}') {
  //     key = whatIsIt(position); // returns string. position is right before ':'
  //     position += 2; // moves it to the value after ':'
  //     returnObject[key] = whatIsIt(position); // position is the last value of the item
  //     if (next(position) === ',') {
  //       position += 2;
  //     }
  //   }
  //   position++;
  //   return returnObject;
  // };

  // var numBooAndNullParser = function() {
  //   var string = '';

  //   if (!isNaN(json.charAt(position))) {
  //     string += json.charAt(position);
  //     while (!isNaN(next(position))) {
  //       string += next(position);
  //       position++;
  //     }
  //     return Number(string);
  //   } else if (json.charAt(position) === 't') {
  //     for (i = 0; i < 4; i++) {
  //       string += json.charAt(position);
  //       position++;
  //     }
  //     if (string === 'true') {
  //       position--;
  //       return true;
  //     }
  //   } else if (json.charAt(position) === 'f') {
  //     for (i = 0; i < 5; i++) {
  //       string += json.charAt(position);
  //       position++;
  //     }
  //     if (string === 'false') {
  //       position--;
  //       return false;
  //     }
  //   } else if (json.charAt(position) === 'n') {
  //     for (i = 0; i < 4; i++) {
  //       string += json.charAt(position);
  //       position++;
  //     }
  //     if (string === 'null') {
  //       position--;
  //       return null;
  //     }
  //   } else {
  //     throw "Invalid at position " + position;
  //   }
  // };

  // return whatIsIt(0);

  // // your code goes here
};