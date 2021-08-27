import Star from './star.js'

export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'player');
    this.score = 0;
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.setCollideWorldBounds();
    this.speed = 300;
    this.jumpSpeed = -400;
    this.label = this.scene.add.text(10, 10);
    this.cursors = this.scene.input.keyboard.createCursorKeys();
    this.updateScore();
  }
  point() {
    this.score++;
    this.updateScore();
  }
  
  updateScore() {
    this.label.text = 'Score: ' + this.score;
  }
  preUpdate() {
    if (this.cursors.up.isDown && this.body.onFloor()) {
      this.body.setVelocityY(this.jumpSpeed);
    }
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.speed);
    }
    else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.speed);

    }
    else {
      this.body.setVelocityX(0);

    }
  }
}
