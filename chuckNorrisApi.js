let url = 'https://api.chucknorris.io/jokes/random';
const joke = document.getElementById("joke");
const btnJoke = document.getElementById("btn");


btnJoke.addEventListener("click", getJoke);
function getJoke() {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        joke.textContent = data.value; 
      })
      .catch(error => console.error('Error:', error));
  }