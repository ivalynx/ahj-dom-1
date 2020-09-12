export default function drawField() {
  const game = document.getElementById('mole_game');
  const quantity = 4;
  for (let index = 0; index < quantity; index += 1) {
    const element = document.createElement('div');
    element.classList.add('mole');
    game.appendChild(element);
  }
}
