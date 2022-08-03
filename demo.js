
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();

	if (firstLetter === 'j') {
   
    console.log('Bye '+firstLetter.toUpperCase()+names[i].slice(1));

  } else {
   
    console.log( 'Hello '+(names[i]));
  }
}

})();