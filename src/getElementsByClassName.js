// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	var returnArray =[];

	var findChildren = function(element) {

		// termination
		if (element.length === 0) {
			return

		// checks through each element to check class
		// if element has a class, push the class to returnArray
		} else {
			for (var i = 0; i < element.length; i++) {
				if ($(element[i]).hasClass(className)) {
					returnArray.push(element[i]);
				}
			}
		}

		// recursion: run through findChildren on element.children()
		if (element.children().length > 0) {
			findChildren(element.children());
		}
	}

	// start recursion by setting element as $('body')
	findChildren($('body'));
	return returnArray;
};
