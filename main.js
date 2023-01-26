const text = "Greetings, here is some information about me";
const about = document.querySelector(".about");

let index = 0;

function writeText() {
  about.innerText = text.slice(0, index);

  index++;

  if (index > text.length) {
    index = 0;
  }
}

setInterval(writeText, 300);
