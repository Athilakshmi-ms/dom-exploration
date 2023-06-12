// Select the last child of the <ol> tag and put it at the beginning of the list

const list = document.querySelector('ol');
const lastChild = list.lastElementChild;
list.insertBefore(lastChild, list.firstElementChild);

// Move the <h2> of the third section in the second one and vice-versa

/*const section = document.querySelectorAll('section');
const sec2 = section[1];
const sec3 = section[2];
const sec2h2 = sec2.querySelector('h2');
const sec3h2 = sec3.querySelector('h2');
sec2.insertBefore(sec3h2, sec2h2);
sec3.insertBefore(sec2h2,sec3h2);*/

// Delete the last section from the DOM, we don't need it anyways
const sec = document.querySelectorAll('section');
const lastSec = sec[sec.length - 1];
lastSec.remove();


