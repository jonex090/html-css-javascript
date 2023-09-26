let quote = document.getElementById("quote");
let author = document.getElementById("author");
const random = randomIntFromInterval(1, 100)
const url = `https://dummyjson.com/quotes/${random}`;
fetch(url).then((res) => res.json()).then((data) => {
   quote.innerText = data.quote;
   author.innerText = data.author;
})

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  