import generatePosition from './generatePosition';

export default function toggleImg(array, img, span) {
  let previousPositionIndex = null;
  array.forEach((el, index) => {
    if (el.contains(img)) {
      previousPositionIndex = index;
    }
  });
  const position = generatePosition(array.length, previousPositionIndex);
  array[position].appendChild(span);
  array[position].replaceChild(img, span);
}
