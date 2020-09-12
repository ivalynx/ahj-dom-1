import generatePosition from './generatePosition';
import toggleImg from './toggleImg';

export default function createImg() {
  const img = document.createElement('img');
  img.setAttribute('src', './img/goblin.png');
  img.setAttribute('alt', 'Цель');
  const moles = document.getElementsByClassName('mole');
  const position = generatePosition(moles.length);
  const array = Array.from(moles);
  array[position].appendChild(img);
  setInterval(() => {
    toggleImg(array, img);
  }, 1000);
}
