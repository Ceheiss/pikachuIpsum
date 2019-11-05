# Pikachu Ipsum


Pikachi Ipsum using Javascript. Sentences are built in a "Mad Libs" fashion, and then stacked into paragraphs.

If there is "Hodor Ipsum" out there, I don't see why we shouldn't have a pikachu one as well.


Code example:
```javascript
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
```

### Check it out [here](https://ceheiss.github.io/pikachuIpsum/PikachuIpsum/index.html)
#### Pika pi!
