const request = require('request');

let args = process.argv.slice(2);

const urlName = `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`;
// const fileToWrite = args[1];


request(urlName, (error, response, body) => {

  //CHECKS FOR ERROR ON REQUEST
  if (error){
    console.log('error:', error); // Print the error if one occurred.
    return;
  } 

  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.


  //PARSE JSON DATA FROM WEB FILE
  const data = JSON.parse(body);
  
  //CHECKS IF USER EXISTS 
  if (!data[0]){
    console.log('Error: Breed not found');
  } else {
    console.log(data[0].description);
  }
});
