var readlineSync = require('readline-sync');
const chalk = require('chalk');
 var score = 0;
var userName = readlineSync.question(chalk.blue('whats your name?'));
 console.log("----------")


console.log("Welcome! " + userName + ", Do you know Saket?");


function play(question , answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase == answer.toUpperCase){
    console.log(chalk.green("right"));
    score = score + 1;
   
   console.log("----------");
  
  }else{
    console.log(chalk.red("wrong"));
    console.log("----------");
  }
}





var questions = [{

  question : "where I do live ?",
  answer : "Bihar"
},

 questionTwo = {

  question : "From where I have done my Undergraduation ?",
  answer : "BIT"
},

  questionThree = {
  question : "Do you follow me in on any Social media?",
  answer : "No"
},
 questionFour = {
  question : "Do you know him from school or college time?",
  answer : "No"

},questionFive = {
  question : "Which school I have studied in?",
  answer : "Saint Teresa school"
}

];

for( var i = 0 ; i < questions.length ; i++){
  
  var vote = questions[i];
  play(vote.question, vote.answer);
   console.log("answer = " + vote.answer);
   console.log("----------");
  console.log("----------");

}
console.log(chalk.green(score));


