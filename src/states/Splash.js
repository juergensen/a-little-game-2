import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar]);

    this.load.setPreloadSprite(this.loaderBar);
    //
    // load your assets
    //
      this.load.image('player', 'assets/images/player_space_ship.png');
      this.load.image('stars', 'assets/misc/starfield.jpg');
      this.load.image('missile', 'assets/images/shot.png');
      this.load.physics("sprite_physics", "assets/sprite_physics.json");
      this.load.audio('sounds', [
        'assets/sounds/shot_sound.ogg'
      ]);
  }

  create () {
    this.state.start('Game')
  }
}
