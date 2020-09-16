export default function generatePosition(length, previousPosition) {
  let result = Math.floor(Math.random() * length);
  if(result === previousPosition) {
    generatePosition(length, previousPosition);
  }
  return result;
}
