//attempting bob's bugers api


 // 1 - function to generate random number
 function getRandomNum(){
  const randomNum = Math.floor((Math.random * 506) + 1 );
 return randomNum;
}

getRandomNum();

//grab button
const button = document.getElementById("form");
//add event listener
form.addEventListener('submit', function (event){
event.preventDefault();

displayData()
form.reset();
});



//function to display populate the div with html from data
// pass random number into function that makes request to api 
//awaits data
//access data and put in html
async function displayData(randomNum){
  const data = await getFromApi(randomNum);
  console.log(data);
 bobsDiv.innerHTML =
  `<h1>${data.character.name}</h1>`
  `<img src=${data.character.image}>`
  
  }

// function that makes request to api 
async function getFromApi(randomNum){
  const apiResponse = await fetch(`https://bobsburgers-api.herokuapp.com/characters/${getRandomNum()}`);
  console.log(randomNum);
const data = await apiResponse.json();
return data;
 }




