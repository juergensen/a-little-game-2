import Phaser from 'phaser'

export default class extends Phaser.Sprite {
    constructor ({ game, x, y, weapon }) {
        super(game, x, y, 'player');
        this.anchor.setTo(0.5);
        this.weapon = this.game.add.weapon(-1, 'missile');
        this.weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
        this.weapon.bulletSpeed = 600;
        this.weapon.fireRate = 100;
        this.weapon.trackSprite(this, 0, -30, true);
    }
    update() {

        if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) this.body.rotateLeft(100);
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) this.body.rotateRight(100);
        else this.body.setZeroRotation();
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) this.body.thrust(400);
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) this.body.reverse(400);
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
          if(this.weapon.fire() != null) this.game.sounds.play('shot');
        };

    }
}
