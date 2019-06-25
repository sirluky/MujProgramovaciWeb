import Phaser from 'phaser';
import { Menu, Flappy } from './Scenes/index';
window.onload = function() {
  var config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    backgroundColor: 0x5e91fe,
    scene: [Menu, Flappy], // add all used scenes
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0, x: 0 },
        // debug: true,
      },
    },
  };

  var game = new Phaser.Game(config);
};
