// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  	if (Array.isArray(obj)) {
  		var returnArrayInString = '[';
  		for (var i = 0; i < obj.length; i++) {
  			returnArrayInString += stringifyJSON(obj[i]) + (i < obj.length - 1 ? ',' : '');
  		}
  		return returnArrayInString + ']';
  	} else if (typeof obj === 'object') {
  		var numOfKeys = 0;

  		for(var key in obj) {
  			numOfKeys++;
  		}

  		var returnObjString = '{';

  		for (var key in obj) {
  			returnObjString += "'" + key + "':" + stringifyJSON(obj[key]) + (numOfKeys > 1 ? ',' : '');
  			numOfKeys--;
  		}
  		return returnObjString + '}';
  	} else {
  		obj = obj.toString();
  		return "'" + obj + "'";
  	}

};
