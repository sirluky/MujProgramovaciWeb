import 'phaser';

class Flappy extends Phaser.Scene {
  constructor() {
    super('Flappy'); // name of scene, used in scene start
    this.alive = true;
    this.pipes;
    this.spacing = 150;
  }
  init() {
    this.rekord = (localStorage.getItem('rekord') && parseInt(localStorage.getItem('rekord'))) || 0;

    this.speed = 100;
    this.score = 0;
  }

  preload() {
    this.load.audio('skore', 'score.mp3');
    this.load.audio('hit', 'hit.mp3');
    this.load.atlas('atlas', 'flappy0.png', 'flappy0.json');
  }

  create() {
    this.add.text(630, 10, 'Rekord: ' + this.rekord).setOrigin(1, 0);
    // this.pipes = this.add.group();
    var { tpipe, bpipe, dropzone } = CreatePipe.bind(this)(700, this.spacing);
    // this.add.group([bpipe, tpipe]);
    this.physics.add.existing(dropzone);

    this.scorezones = this.physics.add.group(dropzone);
    this.scorezones.setVelocityX(-this.speed);

    this.trubky = this.physics.add.group([tpipe, bpipe]);
    this.physics.add.existing(tpipe);
    this.physics.add.existing(bpipe);

    this.trubky.setVelocityX(-this.speed);
    // console.log(trubky.children.entries);

    // tpipe.body.setVelocityX(-100);
    // bpipe.body.setVelocityX(-100);

    // stars.children.iterate(function(child) {
    //   child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    // });

    let ground = this.add
      .tileSprite(0, 480, 672, 32, 'atlas', 'ground.png')
      .setOrigin(0, 1)
      .setScale(1.5)
      .setDepth(-1)
      .setTint(0xff88ff);

    this.skoretext = this.add.text(110, 0 + 10, 'Skore: 0').setOrigin(1, 0);
    this.ptak = this.add.sprite(100, 100, 'atlas', 'bird1.png');
    this.anims.create({
      key: 'let',
      frames: this.anims.generateFrameNames('atlas', {
        prefix: 'bird',
        suffix: '.png',
        start: 1,
        end: 2,
        zeroPad: 0,
      }),
      frameRate: 5,
      yoyo: true,
      repeat: -1,
    });
    this.ptak.anims.play('let');
    this.physics.add.existing(this.ptak, false);
    this.ptak.body.setCollideWorldBounds(true);
    this.ptak.body.setGravityY(800);
    this.physics.add.existing(ground, true).body.setSize();
    this.physics.add.collider(ground, this.ptak);
    // this.physics.add.collider(this)
    this.input.on('pointerdown', () => {
      if (this.alive) {
        this.ptak.body.setVelocityY(-300);
      }
    });

    var tween = this.tweens.add({
      targets: ground,
      x: -48,
      ease: 'linear',
      duration: 500,
      // yoyo: true,
      repeat: -1,
    });
    this.physics.add.collider(this.trubky, this.ptak, () => {
      setTimeout(e => this.scene.start('MENU', this.score + ''), 10);
    });

    this.physics.add.overlap(this.scorezones, this.ptak, () => {
      this.score++;
      this.skoretext.setText('Skore: ' + this.score);
      this.sound.play('skore');
      this.speed = 100 + this.score / 2;

      this.scorezones.remove(this.scorezones.children.entries[0], true, true);
    });
    this.casovac = setInterval(() => {
      var { tpipe, bpipe, dropzone } = CreatePipe.bind(this)(700, this.spacing);
      this.physics.add.existing(tpipe);
      this.physics.add.existing(bpipe);
      this.physics.add.existing(dropzone);
      this.scorezones.add(dropzone);
      this.trubky.addMultiple([tpipe, bpipe]);
      this.trubky.setVelocityX(-this.speed);
      this.scorezones.setVelocityX(-this.speed);
    }, 1800);
    this.events.on('shutdown', () => {
      this.sound.play('hit');
      if (this.score > localStorage.getItem('rekord')) localStorage.setItem('rekord', '' + this.score);
      clearInterval(this.casovac);
    });
  }
  update(time) {
    this.ptak.setAngle(this.ptak.body.velocity.y / 10);
    // console.log(time);

    if (this.trubky.children.entries[0].x < -32) {
      this.trubky.remove(this.trubky.children.entries[0], true, true);
      this.trubky.remove(this.trubky.children.entries[0], true, true);
    }
  }
}
export { Flappy };

function CreatePipe(x, spacing = 100) {
  // this.pipe = this.add.tileSprite(x, y, 32, 100, 'atlas', 'pipe.png');
  // this.bottom = this.add.sprite(x, y + 66, 'atlas', 'pipeout.png');
  // let pipe = this.add.group();

  var pipeH = Phaser.Math.RND.between(0, 280);

  let rt = this.add
    .renderTexture(x, 0, 32, pipeH + 32)
    // .setVisible(false)
    .setOrigin(0, 0);
  var pipe = this.add
    .tileSprite(0, 0, 32, pipeH, 'atlas', 'pipe.png')
    .setVisible(false)
    .setOrigin(0, 0);
  var pipeout = this.add
    .sprite(0, 0, 'atlas', 'pipeout.png')
    .setVisible(false)
    .setOrigin(0, 0);
  rt.draw(pipe, 0, 0);
  rt.draw(pipeout, 0, pipeH);
  let dropzone = this.add.renderTexture(x, pipeH, 32, spacing);

  var pipeH = pipeH + spacing;
  let lt = this.add
    .renderTexture(x, pipeH, 32, 480 - pipeH + 32)
    // .setVisible(false)
    .setOrigin(0, 0);
  var pipe = this.add
    .tileSprite(0, 0, 32, 480 - pipeH, 'atlas', 'pipe.png')
    .setVisible(false)
    .setOrigin(0, 0);
  var pipeout = this.add
    .sprite(0, 0, 'atlas', 'pipeout.png')
    .setVisible(false)
    .setOrigin(0, 0)
    .setFlipY(true);

  lt.draw(pipe, 0, 32);
  lt.draw(pipeout, 0, 0);
  return { tpipe: rt, bpipe: lt, dropzone };
}
