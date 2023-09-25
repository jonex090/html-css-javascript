let quote = document.getElementById("quote");
let author = document.getElementById("author");

const url = "https://dummyjson.com/quotes/3";


let getQoute = () =>{    
    fetch(url)
    .then((data) => data.json())
    .then((item) => {
        const indx = Math.floor(Math.random()*item.length);
        console.log(item.quote);
        console.log(item.author);
        quote.innerText = item.quote;
        author.innerText = item.author;
    });
};

window.addEventListener("load", getQoute);

