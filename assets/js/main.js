"use strict"
console.log("good morning")
// Your API key is: 712ef00549134bfc8376f20f42b38676

const inputText = document.querySelector('form input[type="text"]');
const button = document.querySelector('form input[type="button"]');
let section = document.querySelector('section');
const selection = document.querySelector('#language');

function update() {
    let language = selection.options[selection.selectedIndex].value;
    return language
}

// section.innerHTML = "YOUR DAILY NEWS"


const search = () => {
    console.log(update())
    section.innerHTML = ""
    console.log(inputText.value);
    fetch(`https://newsapi.org/v2/everything?q=${inputText.value}&from=2023-03-03&sortBy=publishedAt&language=${update()}&apiKey=712ef00549134bfc8376f20f42b38676`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.articles.forEach((elt) => {
                section.innerHTML += `
            <div>
                <h2>${elt.title}</h2>
                <hr>
                <p>${elt.description}</p>
                <img src="${elt.urlToImage}" alt="random">

            </div>
            `

            })

        });

}


    // https://newsapi.org/v2/everything?q=${inputText.value}&from=2023-03-03&sortBy=publishedAt&apiKey=712ef00549134bfc8376f20f42b38676`)