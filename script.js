console.log('huzzah! js is connected');

//grab form
// add event listener
// make function for what to do when event is fired

const form = document.getElementById("form");
console.log(form);


const weatherDiv = document.getElementById("weatherDiv");


form.addEventListener('submit', function (event){
  event.preventDefault();
  const userInput = document.getElementById("input").value;
 displayData(userInput);
  form.reset();
});


//function to display populate the div with html, showing user the response
async function displayData(userInput){
const data = await getFromApi(userInput);
console.log(data);
weatherDiv.innerHTML =
`<h1>${data.current.temp_f}</h1>`

}

// function that makes request to api - default GET request
async function getFromApi(userInput){
  const apiResponse = await fetch(`https://api.weatherapi.com/v1/current.json?key=d01e96a14a9449a7a6f152442231805&q=${userInput}&aqi=no`);
const data = await apiResponse.json();
return data;
}

