
(function speak (name) {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
	var firstLetter = names[i].charAt(0).toLowerCase();
  var speakWord='Good Bye ';

	if (firstLetter === 'j') {
   
    console.log(speakWord+firstLetter.toUpperCase()+names[i].slice(1));

  } else {
    var speakWord='Hello '
   
    console.log( speakWord+(names[i]));
  }
}

})();