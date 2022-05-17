/* MAGIC EIGHT BALL */

//Enter user name
let userName = 'Sean';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

//Enter question you would like to ask the Magic Eight Ball
let userQuestion = 'Will I have fun today?';
userName ? console.log(`${userName} asked the question: ${userQuestion}`) : console.log(`The user asked the question: ${userQuestion}`);

//generates random number between 0 and 7
let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

//control flow
switch (randomNumber) {
  case (0):
    eightBall = 'It is certain';
    break;
  case (1):
    eightBall = 'It is decidedly so';
    break;
  case (2):
    eightBall = 'Reply hazy try again';
    break;
  case (3):
    eightBall = 'Cannot predict now';
    break;
  case (4):
    eightBall = 'Do not count on it';
    break;
  case (5):
    eightBall = 'My sources say no';
    break;
  case (6):
    eightBall = 'Outlook not so good';
    break;
  case (7):
    eightBall = 'Signs point to yes';
    break;
}

//prints Magic Eight Ball's answer 
console.log(`Magic Eight Ball's answer: ${eightBall}`);