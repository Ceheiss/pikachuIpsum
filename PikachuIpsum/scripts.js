/*
I coded this Ipsum creating dynamic paragraphs (each paragraph is generated on the fly). A user can indicate the amount of paragraphs wanted and they will populate in the container. Enjoy!
ps: If you click Pikachu, something might happen
*/

// Get the button
const button = document.querySelector("#btn");
// This function creates a basic paragraph that is going to be dinamic
function fillWordsFunc () { 
  const initPikaWords = ["Pikachu ", "PIII...KAAAA...CHUUUU! ", "Pikapi ", "Pika ", "Pika Pika "];
  const fillPikaWords = ["pikachu ", "pikapi ", "chu, ", "piiiikapikapiiii ", "chu pika chu, ", "pika pi? ", "pikachu! ", "pika?! ", "pikachu ", "pi pikapi "];
  const firstWord = initPikaWords[Math.floor(Math.random() * initPikaWords.length)];
  let fillWordsArr = [];
  for(let i = 0; i < 40; i++) {
    let pikaWord = fillPikaWords[Math.floor(Math.random() * fillPikaWords.length)];
    fillWordsArr.push(pikaWord);
  }
  let fillWords = fillWordsArr.join(" ");
  let paragraph = firstWord + fillWords;
  return paragraph;
}

// This function creates a paragraph in the HTML with the information provided with the above function
// So when called, we use the fillWordsFunc as it's argument
function addElement(content){
  const paragraph = document.createElement("p");
  const paraText = document.createTextNode(content);
  paragraph.appendChild(paraText);
  
  const groupsContainer = document.getElementById("container");
  groupsContainer.appendChild(paragraph);
}

// This function cleans the container and later populates it with paragraphs
function createIpsum (times) {
  const container = document.getElementById("container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  } 
  for(let i = 0; i < times; i ++){
    addElement(fillWordsFunc());
  }
}

// This function takes the number input to generate the ipsum
function getNumber(){
  const numInput = document.querySelector("#iteration");
  const numberOfPar = numInput.value;
  return numberOfPar;
}

// This function inception is what finally does the job
function generateText(){
  createIpsum(getNumber());
}

button.addEventListener("click", generateText);

/* Other Effects */

const pikaImage = document.querySelector("#pikaImage");

pikaImage.addEventListener("click", function(){
  pikaAudioImg.play();
})

button.addEventListener("click", function(){
    pikaAudio.play();
})

// functions to change button text
function chuMessage(){ 
  button.value = "Chu!";
}

function pikaMessage(){
  button.value = "Pika!";
}

