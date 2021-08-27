import Star from './star.js'

export default class Base extends Phaser.GameObjects.Sprite {
  constructor(scene, platform, x, y, baseGroup) {
    super(scene, x, y, 'base');
    this.scene.add.existing(this);

    this.scene.physics.add.existing(this, true);
    baseGroup.add(this);
    this.y -= this.height / 2 + platform.height / 2;


  }
  spawn() {
    this.scene.add.existing(new Star(this.scene, this, this.x, this.y));
  }
}
