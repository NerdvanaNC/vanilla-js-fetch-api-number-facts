const numberInput = document.querySelector('#number');
const factDiv = document.querySelector('#fact');
const factText = document.querySelector('#factText');

function getFact() {
  const number = numberInput.value;
  const url = 'http://numbersapi.com/' + number + '?json';

  if(number === "") {
    factDiv.classList.add('opacity-0');
  } else {
    factDiv.style.opacity = 0;

    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      factText.innerText = data.text;
      factDiv.style.opacity = 1;
    });
  }
}

numberInput.addEventListener('change', getFact);
document.addEventListener('DOMContentLoaded', getFact);