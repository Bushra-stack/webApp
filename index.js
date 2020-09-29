
var category = 'DevOps';
var difficulty = 'Hard';
function getValue(){
  category=document.getElementById("Cat").value;
  difficulty=document.getElementById("Diff").value;
  console.log(category,difficulty);
  const api = 'https://quizapi.io/api/v1/questions?apiKey=pFf1dce9OyAATwy2WY5NhHd10A26Dx0HwTkqEVSS&limit=1'
  const api_url = api.concat('&category=',category,'&difficulty=',difficulty);


  async function getQuestions() {
    console.log('About to fetch API...');
    console.log(api_url);
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
      
    }
    
    /*const { latitude, longitude } = data;
  
    marker.setLatLng([latitude, longitude]);
    if (firstTime) {
      mymap.setView([latitude, longitude], 2);
      firstTime = false;
    }
    document.getElementById('lat').textContent = latitude.toFixed(2);
    document.getElementById('lon').textContent = longitude.toFixed(2);*/
  }
  getQuestions();

}














/*const data = { username: 'example' };
fetch(`https://quizapi.io/api/v1/questions?apikey=`+`3RHgosCYlQMC1nIxWAduNYkaXPKiKLriYc2TsMpr`+`&limit=1`{
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json','
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});*/