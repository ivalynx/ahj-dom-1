export default function drawField() {
  const game = document.getElementById('mole_game');
  const quantity = 4;
  const elements = [];
  for (let index = 0; index < quantity; index += 1) {
    const element = document.createElement('div');
    element.class = 'mole';
  }
  game.append(elements);
}
