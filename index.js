const api_url ='https://quizapi.io/api/v1/questions?apiKey=GxObO7zjaHw7B1769Sr3Eec3Ai6vCVle1xVtjM0t&limit=1'
var button = document.getElementById('submit_newQuestion');



async function getQuestions() {
  console.log('About to fetch API...');
  const response = await fetch(api_url);
  const data = await response.json();
  console.log(data[0].question);
  //const question=data[0].question;
  const { question, difficulty , category, multiple_correct_answers } = data[0];
  var answersArray = [];
  answersArray[0]=data[0].answers["answer_a"];
  answersArray[1]=data[0].answers.answer_b;
  answersArray[2]=data[0].answers.answer_c;
  answersArray[3]=data[0].answers.answer_d;
  answersArray[4]=data[0].answers.answer_e;
  answersArray[5]=data[0].answers.answer_f;
  console.log(answersArray[0], answersArray[1],answersArray[2],answersArray[3],answersArray[4],answersArray[5]);

  //const answer_a=data[0].answers["answer_a"];
  //console.log(answer_a);

  var reload_msg;
  if ( multiple_correct_answers == "false"){
    console.log('Not a multiple_correct_answers!');
    reload_msg="Submit";
    location.assign = 'game.html';
    document.getElementById('Api_question').textContent = question;
    document.getElementById('Api_Difficulty').textContent = difficulty;
    document.getElementById('Api_Category').textContent = category;
    document.getElementById('Api_answer_a').textContent = answersArray[0];
    document.getElementById('Api_answer_b').textContent = answersArray[1];
    document.getElementById('Api_answer_c').textContent = answersArray[2];
    document.getElementById('Api_answer_d').textContent = answersArray[3];
    document.getElementById('Api_answer_e').textContent = answersArray[4];
    document.getElementById('Api_answer_f').textContent = answersArray[5];
    document.getElementById('submit_newQuestion').value=reload_msg;

  }else{
    console.log('This is a multiple_correct_answers!');
    reload_msg ="Reload a new Question!";
    document.getElementById('submit_newQuestion').value=reload_msg;
    location.assign = '/gameMultipleChoice.html';
    document.getElementById('Api_question').textContent = question;
    document.getElementById('Api_Difficulty').textContent = difficulty;
    document.getElementById('Api_Category').textContent = category;
    document.getElementById('Api_answer_a').textContent = answersArray[0];
    document.getElementById('Api_answer_b').textContent = answersArray[1];
    document.getElementById('Api_answer_c').textContent = answersArray[2];
    document.getElementById('Api_answer_d').textContent = answersArray[3];
    document.getElementById('Api_answer_e').textContent = answersArray[4];
    document.getElementById('Api_answer_f').textContent = answersArray[5];
    
    
  }
  
  
}



button.onclick = getQuestions ();
//getQuestions();






