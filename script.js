//FIRST TASK

document.getElementById('hider').onclick = function () {
  document.getElementById('text').hidden = true;
}

//SECOND TASK 

// Будет выведено цифра 1 т.к обработчик собития не был удален

// THIRD TASk 

let panes = document.querySelectorAll('.pane');
const box = document.querySelector('.first');

panes.forEach(item => {
  const ex = document.createElement('button');
  ex.textContent = '[x]';
  ex.classList.add('btnsFirst');
  item.prepend(ex);
})


box.addEventListener('click', (e) => {
  const target = e.target;
  const btns = document.querySelectorAll('button');
  if (target.tagName == 'BUTTON') {
    btns.forEach(item => {
      if (item == target) {
        item.parentElement.remove();
      }

    })
  }
})


