// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  	if (Array.isArray(obj)) {
  		var returnArrayInString = '[';
  		// recurses through stringifyJSON for each item in the array
  		for (var i = 0; i < obj.length; i++) {
  			returnArrayInString += stringifyJSON(obj[i]) + (i < obj.length - 1 ? ',' : '');
  		}

  		// return stringified array, adding the closing bracket
  		return returnArrayInString + ']';

  	} else if (typeof obj === 'object') {
  		// returns "null" if null
  		if (obj === null) {
  			return "null";
  		}

  		// counts how many key-value pairs are in the object
  		// comes in handy for not putting a comma after the last key-value pair
  		var numOfKeys = 0;

  		for(var key in obj) {
  			numOfKeys++;
  		}

  		// start building stringified object
  		var returnObjString = '{';

  		// recurses through stringifyJSON for each key-value pair
  		// tracks numOfKeys. A comma isn't added for last key-value pair (when numOfKeys === 1)
  		for (var key in obj) {
  			// skips key-value pairs that are funcitons or are undefined.
  			if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
  				returnObjString += '"' + key + '":' + stringifyJSON(obj[key]) + (numOfKeys > 1 ? ',' : ''); 
  			}
  			numOfKeys--; 
  		}

  		// return stringified object, adding the closing bracket
  		return returnObjString + '}';

  	} else if (typeof obj === 'number' || typeof obj === 'boolean') {
  		obj = obj.toString();
  		return obj;
  	} else {
  		console.log('this is something else');
  		return '"' + obj + '"';
  	}

};
