import GameOfLife from './game-of-life.js';
const config = {
  type: Phaser.AUTO,
  width: 495,
  height: 495,
  scene: GameOfLife,
};
const game = new Phaser.Game(config);
