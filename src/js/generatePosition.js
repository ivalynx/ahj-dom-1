export default function generatePosition(length, previousPosition) {
  const result = Math.floor(Math.random() * length);
  if (result === previousPosition) {
    generatePosition(length, previousPosition);
  }
  return result;
}
