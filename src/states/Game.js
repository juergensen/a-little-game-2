/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    this.world.setBounds(0,0,10000,10000);
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.defaultRestitution = 0.8;
    this.starfield = this.game.add.tileSprite(0, 0, 10000, 10000, 'stars');
    this.sounds = this.game.add.audio('sounds');
    this.sounds.allowMultiple = true;
    this.sounds.addMarker('shot', 0, 1);

    this.player = new Player({game: this, x:100, y:100});
    this.game.add.existing(this.player);
    this.game.physics.p2.enable(this.player);
    this.game.camera.follow(this.player);
    this.player.body.clearShapes();
    this.player.body.loadPolygon("sprite_physics", "player_space_ship");
  }

  render () {

  }
}
