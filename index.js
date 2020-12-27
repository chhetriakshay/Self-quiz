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

if(score>=3)
{
  console.log(chalk.green("Congratulations!! You now are about to enter level Two"));

   function lvl2(question,answer)
 {
  var init= readlineSync.question(question);
  if(init==answer)
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
  question: "What is the name of my College? ",
  answer:"RNSIT",
 }
 questionTwo=
 {
  question: "What plant would I love to have in my house? ",
  answer:"Peace Lily",
 }
 questionThree=
 {
  question: "Which reptile do I fear the most? ",
  answer:"Snake",
 }
 var ques= [questionOne,questionTwo,questionThree];
 for(i=0;i<ques.length;i++)
 {
  var store=ques[i];
  console.log("\n");
  lvl2(store.question,store.answer)
 }
 console.log("Your final score is ", score);
console.log("Thank You for Playing", name);
}
else
{
  console.log("Thank You for Playing", name)
}

