// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	// get ElementByClassName returns an array of elements on a DOM that
	// have the className entered as a parameter. This re-write uses
	// recusion and jquery to traverse a DOM and push any element
	// containg the className parameter into an returnArray.
	// ================================================================

	// sets a return array.
	var returnArray =[];

	// recursive function findChildren take in an array of element on a
	// DOM
	// ===============================================================
	// Things to note: 
	// 1. element.children() will pull all the child elements into an array. 
	// 2. If element.children().length === 0, there are no children. 
	// 3. element.hasClass('className') returns a boolean
	// ===============================================================
	// The function loops through an array of elements to indentify if
	// that level of elements contains an element with the className
	// parameter.
	// If an element.hasClass(className) === true, it pushes that element into the returnArray.

	var findChildren = function(element) {

		// termination statement when there are no elements at that level or organization.
		if (element.length === 0) {
			return

		// This for loop checks through each element to check class
		// if element has a class, push the class to returnArray
		} else {
			for (var i = 0; i < element.length; i++) {
				if ($(element[i]).hasClass(className)) {
					returnArray.push(element[i]);
				}
			}
		}

		// recursion: run through findChildren on element.children()
		findChildren(element.children());
	}

	// start recursion by setting element as $(document)
	findChildren($(document));
	return returnArray;
};
