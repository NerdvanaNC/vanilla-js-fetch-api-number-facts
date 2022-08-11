const numberInput = document.querySelector('#number');
const factText = document.querySelector('#factText');

async function getFact() {
  const number = numberInput.value;
  const url = 'http://numbersapi.com/' + number + '?json';

  if(number === "") {
    factText.classList.replace('opacity-100', 'opacity-0');
  } else {
    factText.classList.replace('opacity-100', 'opacity-0');
    
    try {
      const response = await fetch(url);
      const responseJSON = await response.json();
      factText.innerText = responseJSON.text;
      factText.classList.replace('opacity-0', 'opacity-100');
    } catch (error) {
      factText.innerText = 'Something went wrong, please try again.';
      factText.classList.replace('opacity-0', 'opacity-100');
      console.log(error);
    }
  }
}

numberInput.addEventListener('change', () => getFact());
document.addEventListener('DOMContentLoaded', () => getFact());