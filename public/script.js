console.log('Script loaded!');

function reloadJoke() {
  console.log('Reload button clicked!');
  const jokeElement = document.getElementById('joke');
  jokeElement.innerHTML = 'Loading...';
  fetch('/api/joke')
    .then(response => response.json())
    .then(data => {
      jokeElement.innerHTML = data.joke;
    });
}

// Call reloadJoke on page load to load the initial joke
window.onload = reloadJoke;
