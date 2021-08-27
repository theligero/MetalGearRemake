import Player from './player.js'
import Platform from './platform.js';

export default class Scene extends Phaser.Scene {
  constructor() {
    super({ key: 'scene' });
  }

  create() {
    this.stars = 10;
    this.bases = this.add.group();
    this.player = new Player(this, 200, 300);

    new Platform(this, this.player, this.bases, 150, 350);
    new Platform(this, this.player, this.bases, 850, 350);
    new Platform(this, this.player, this.bases, 500, 200);
    new Platform(this, this.player, this.bases, 150, 100);
    new Platform(this, this.player, this.bases, 850, 100);
    this.spawn();
  }

  spawn(from = null) {
    Phaser.Math.RND.pick(from || this.bases.children.entries).spawn();
  }
}