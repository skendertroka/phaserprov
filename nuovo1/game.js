const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 1000,
  heigth: 800,
  scene: {
    preload,
    create,
    update,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 500 },
    },
  }
};

const game = new Phaser.Game(config);

function preload(){
  this.load.image('tiles','assets/houses.png');
  this.load.image('tiles1','assets/Outside_B');
  this.load.image('tiles2','assets/Outside_A4');
  this.load.tilemapTiledJSON('map','assets/tilemaps/baseg.json');
}

function create(){
  const map = this.make.tilemap({ key: 'map'});
  const tileset = map.addTilesetImage('houses','tiles');
  const platforms = map.createStaticLayer('platforms',tileset, 0, 200);
}
function update(){

}
