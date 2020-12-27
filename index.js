var readlineSync= require('readline-sync');
const chalk = require('chalk');
var score=0;
var x=readlineSync.question("Do you know Akshay Chhetri? ");
if(x=="yes")
{
  console.log("Lets Play the game.Please answer the answers with first letter in CAPITAL");
  var name= readlineSync.question("What's your name? ");
  console.log("Welcome to the game ",name);

}
else
{
  console.log("See you later!!!");
}
if(x=="yes")
{
  function start(question,answer)
  {
    var result= readlineSync.question(question);
    if(result==answer)
    {
      console.log(chalk.green("Congratualtions!!! You are correct"));
      score=score+1;
    }
    else
    {
      console.log(chalk.red("Sorry!!! You are wrong"));
      score=score;
    }

  }
  questionOne=
  {
  question: "What is the name of my hometown? ",
  answer:"Jaigaon",
  }
  questionTwo=
  {
  question: "Which city do I currently live in? ",
  answer:"Bangalore",
  }
  questionThree=
  {
  question: "How old am I? ",
  answer:"23",
  }
  questionFour={
  question: "What's my favourite food? ",
  answer:"Biryani",
  }
  questionFive=
  {
  question: "What do I generally prefer to do when I'm bored? ",
  answer:"Cook",
  }

  questions=[questionOne,questionTwo,questionThree,questionFour,questionFive,];
  for(i=0;i<questions.length;i++)
  {
  var store = questions[i];
  console.log("\n");
  start(store.question,store.answer);

  }
}
console.log("Your final score is ", score);