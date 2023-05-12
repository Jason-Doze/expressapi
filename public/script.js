console.log('Script loaded!');

function reloadJoke() {
  console.log('Reload button clicked!');
  const jokeElement = document.getElementById('joke');
  jokeElement.innerHTML = 'Loading...';
  fetch('/api')
    .then(response => response.text())
    .then(joke => {
      jokeElement.innerHTML = joke;
    });
}