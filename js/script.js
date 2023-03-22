const words = ['JavaScript', 'HTML', 'CSS', 'React', 'Node.js'];
let index = 0;
let isDeleting = false;
let text = '';

function type() {
  const currentWord = words[index];
  if(!isDeleting) {
    text = currentWord.substring(0, text.length + 1);
    document.getElementById('test').innerHTML = text;
    if(text === currentWord) {
      isDeleting = true;
      setTimeout(() => {
        type();
      }, 1500);
    } else {
      setTimeout(() => {
        type();
      }, 100);
    }
  } else {
    text = currentWord.substring(0, text.length - 1);
    document.getElementById('test').innerHTML = text;
    if(text === '') {
      isDeleting = false;
      index = (index + 1) % words.length;
      setTimeout(() => {
        type();
      }, 500);
    } else {
      setTimeout(() => {
        type();
      }, 100);
    }
  }
}

type();