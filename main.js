import GameOfLife from './game-of-life.js';
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: GameOfLife,
};
const game = new Phaser.Game(config);
