const numberInput = document.querySelector('#number');
const factText = document.querySelector('#factText');

function getFact() {
  const number = numberInput.value;
  const url = 'http://numbersapi.com/' + number + '?json';

  if(number === "") {
    factText.classList.replace('opacity-100', 'opacity-0');
  } else {
    factText.classList.replace('opacity-100', 'opacity-0');

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      factText.innerText = data.text;
      factText.classList.replace('opacity-0', 'opacity-100');
    })
    .catch((err) => {
      factText.innerText = 'Something went wrong, please try again.'
    });
  }
}

numberInput.addEventListener('change', () => getFact());
document.addEventListener('DOMContentLoaded', () => getFact());