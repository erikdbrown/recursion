// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

	var returnArray =[];

	var findChildren = function(element) {
		if (element.length === 0) {
			return
		} else {
			for (var i = 0; i < element.length; i++) {
				if ($(element[i]).hasClass(className)) {
					returnArray.push(element[i]);
				}
			}
		}

		if (element.children().length > 0) {
			findChildren(element.children());
		}
	}

	findChildren($('body'));
	return returnArray;
};
