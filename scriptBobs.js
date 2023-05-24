//attempting bob's bugers api

console.log("burgers are go!")

const bobsDiv = document.getElementById("bobsDiv")

// function that makes request to api 
async function getFromApi(randomNum){
  const apiResponse = await fetch(`https://bobsburgers-api.herokuapp.com/characters/${randomNum}`);
const data = await apiResponse.json();
return data;
 }


//function to display populate the div with html from data
// pass random number into function that makes request to api 
//awaits data
//access data and put in html
async function displayData(randomNum){
  const data = await getFromApi(randomNum);
  // debugger;
 bobsDiv.innerHTML =
  ` <img src="${data.image}">
  <p id="cardName">${data.name}</p>
 `
  
  }


 // 1 - function to generate random number
 function getRandomNum(){
  const randomNum = Math.floor((Math.random() * 506) + 1 );
  displayData(randomNum);
  console.log(`random number: ${randomNum}`);
}

//grab button
const button = document.getElementById("form");
//add event listener
form.addEventListener('submit', function (event){
event.preventDefault();
getRandomNum();
form.reset();
});


