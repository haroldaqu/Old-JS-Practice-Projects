const searchInput = document.querySelector('#search')
const searchBtn = document.querySelector('.search-btn')
// const img = document.querySelector('img');
const randomBtn = document.querySelector('.random-btn');

// function randomGif (search) {
//        fetch(`https://api.giphy.com/v1/gifs/translate?api_key=vJhOIgplEk3yUJCcJWDQ4ggwXX4TyGnE&s=${search}`, {mode: 'cors'})
//         .then(function(response) {
//         return response.json();
//         })
//         .then(function(response) { 
//         img.src = response.data.images.original.url;
//         });
// }

// function searchGif () {
//     randomGif(searchInput.value)
// }
// searchBtn.addEventListener('click', searchGif)
// randomBtn.addEventListener('click', randomGif)

async function getGif () {
    const img = document.querySelector('img');
    const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=vJhOIgplEk3yUJCcJWDQ4ggwXX4TyGnE&s=nba`, {mode: 'cors'});
    const gifData = await response.json();
    img.src = gifData.data.images.original.url
}

getGif()
