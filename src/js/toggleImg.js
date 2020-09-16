import generatePosition from './generatePosition';

export default function toggleImg(array, img) {
  let previousPositionIndex = null;
  array.forEach((el, index) => {
    if (el.contains(img)) {
      previousPositionIndex = index;
    }
  });
  const position = generatePosition(array.length, previousPositionIndex);
  array[previousPositionIndex].removeChild(img);
  array[position].appendChild(img);
}
