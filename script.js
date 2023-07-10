const btn = document.getElementById('button');
const boxes = document.getElementById('boxes');

btn.addEventListener('click', () => {
  boxes.classList.toggle('shown');
});

const shownBox = function () {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let box = document.createElement('div');
      box.classList.add('box');
      box.style.backgroundPosition = ` ${-j * 125}px ${-i * 125}px `;
      boxes.append(box);
    }
  }
};
shownBox();
