require('./instantHello'); // instantly run
var goodbye = require('./talk/goodbye'); // run everything
var talk = require('./talk'); // run method as called
var question = require('./talk/question'); // run method as called

talk.intro();
talk.hello("Ginane");

var answer = question.ask("What's the meaning of love?;");
console.log(answer);

goodbye();