export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  preload() {
    this.load.setBaseURL('../assets/sprites');
    this.load.image('platform', 'platform.png');
    this.load.image('base', 'base.png');
    this.load.image('star', 'star.png');
    this.load.image('player', 'player.png');
  }

  create() {
    this.scene.start('scene');
  }
}