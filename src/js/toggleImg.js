import generatePosition from './generatePosition';

export default function toggleImg(array, img) {
  const position = generatePosition(array.length);
  let imgIndex = null;
  array.forEach((el, index) => {
    if (el.contains(img)) {
      imgIndex = index;
    }
  });
  array[imgIndex].removeChild(img);
  array[position].appendChild(img);
}
