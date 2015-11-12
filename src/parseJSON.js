// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {

  var position = 0;
  // var charAtPosition = json.charAt(position);
  // function to look at the next value

  var escapeValues = {
    'b': '\b',
    'f': '\f',
    'n': '\n',
    'r': '\r',
    't': '\t',
    "'": '\'',
    // '"': '\"',
    '\\': '\\',
    'sp': ' '
    };

  var next = function(charPosition) {
    var start = json.charAt(charPosition);
    return json.charAt(charPosition + 1);
  }

  var errorMsg = function(message) {
    throw message;
  }

  // funciton to traverse the string until it finds specific markers
  // { start of an object
  // [ start of an object
  // ' start of a string
  // : end of a key
  // , end of a value

  var whatIsIt = function(pos) {
    position = pos;
    whitespace();
    console.log('whatIsIt position = ' + position);
    var startValue = json.charAt(position);
    position++;
    if (startValue === '{') {
      return objectParser();
    } else if (startValue === "'" || startValue === '"') {
      return stringParser();
    } else if (startValue === '[') {
      return arrayParser();
    } else {
      position--;
      return numBooAndNullParser();
    }
  };

  var whitespace = function() {
    for (var key in escapeValues) {
      if (json.charAt(position) === escapeValues[key]) {
        position++;
        whitespace();
      };
    }
  }

  var stringParser = function() {
    var string = '';
    var isStringComplete = false;
    // var character = json.charAt(position);

    while (!isStringComplete) {
      var character = json.charAt(position);
      if (character === '"') {
        isStringComplete = true;
      } else if (character === '\\') {
        string += '\\\\'
        if (next(position) === "'" || next(position) === '"') {
          string += next(position);
          position += 2;
        } else {
          position++;
        }
      } else if (character !== '"') {
        string += character;
        position++;
      } else if (character !== '"') {
        errorMsg("SyntaxError"); // This needs to be fixed
      }
    }
    console.log('Position at end of stringParser: ' + position);
    return string;
  }


  // {"menu":{"id":"file","value":"File","popup":{"menuitem":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}}"
  // parses through an string and returns the array
  var arrayParser = function() {
    var returnArray = [];
    var isArrayComplete = false;
    var value;

    while (!isArrayComplete) {
      whitespace(); // removes any whitespace between before the value.
      if (json.charAt(position) === ']') {
        isArrayComplete = true;
      } else {
        value = whatIsIt(position); // position is the last value of the item
        position++; // moves position to the next position after the value
        whitespace(); // removes any whitespace
        returnArray.push(value); // pushes the value into returnArray
        console.log(returnArray);
        if (json.charAt(position) === ',') {
          position++; // moves position to the next value in the array.
        } else if (json.charAt(position) !== ']') {
          errorMsg("SyntaxError");
        }
      }
    }
      // if (returnArray[returnArray.length - 1] === returnArray[returnArray.length - 2])// if the last two values in the array are the same
      // check the length of the second value in the array
      // move the position to the end of the second spot
      // run whatIsIt
      // if the result is not the same as last value in array, change value.
      // moves the position to the closing brack in the json string
    return returnArray;
  }


  var objectParser = function() {
    var returnObject = {};
    var isObjectComplete = false;
    var key = '';
    var value;

    while (!isObjectComplete) {
      if (json.charAt(position) === '}') {
        isObjectComplete = true;
      } else {
        key = whatIsIt(position); // resurns key string.
        console.log('key = ' + key);
        position++; // moves to the next position

        // removes any white space between key and :
        while(json.charAt(position) !== ':') {
          whitespace();
        }
        // position is at ':'
        position ++; // moves position to the value after ':'
        whitespace(); // removes any whitespace between ':' and key value
        returnObject[key] = whatIsIt(position);  // position is the last value of the item
        console.log('value = ' + returnObject[key]);
        position++; // moves to the next position after key value
        whitespace(); // removes any whitespace
        if (json.charAt(position) === ',') {
          position++; // moves to the next value after the comma to initiate the next loop
          whitespace(); // removes any whitespace between comma and next value
        } else if (json.charAt(position) !== '}') {
          errorMsg("SyntaxError");
        }
      }
    }
    return returnObject;
  };

  var numBooAndNullParser = function() {
    var string = '';

    if (!isNaN(json.charAt(position)) || json.charAt(position) === '-') {
      string += json.charAt(position);
      while (!isNaN(next(position)) || next(position) === '.') {
        string += next(position);
        position++;
      }
      console.log('Position: ' + position);
      return Number(string);
    } else if (json.charAt(position) === 't') {
      for (i = 0; i < 4; i++) {
        string += json.charAt(position);
        position++;
      }
      if (string === 'true') {
        position--;
        return true;
      }
    } else if (json.charAt(position) === 'f') {
      for (i = 0; i < 5; i++) {
        string += json.charAt(position);
        position++;
      }
      if (string === 'false') {
        position--;
        return false;
      }
    } else if (json.charAt(position) === 'n') {
      for (i = 0; i < 4; i++) {
        string += json.charAt(position);
        position++;
      }
      if (string === 'null') {
        position--;
        console.log('Position at end of numBooAndNullParser: ' + position);
        return null;
      }
    } else {
      errorMsg("SyntaxError");
    }
  };

  return whatIsIt(0);

  // your code goes here
};