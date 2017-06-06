var text = 'The sum is ';
function addIt (numA, numB){
	var total = numA + numB;
	console.log(text + total);
}
function multiply(numA, numB){
	var total = numA * numB;
	return total;
	console.log('this is never going to happen');
}
console.log(multiply(29, 4));

var myClass = "You all are great!";
var kurt = {
	arms: 2, 
	bigNose: true,
	hairColor: 'brown',
	slogan: function(what){
		console.log(what + ' are awesome')
	}
}
kurt.slogan('You all');
kurt.hairColor = 'grey';
console.log(kurt.hairColor);
console.log(myClass);