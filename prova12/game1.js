const config = {
  type: Phaser.AUTO,
  width:800,
  height:800,
  physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 0}
        }
  },
  scene: {
    key: "main",
    preload: preload,
    create: create,
    update: update
  }
};

  const game =new Phaser.Game(config);

  function preload(){
    this.load.tilemapTiledJSON("map","assets/tilemaps/tuxemon-town.json");
    this.load.image("tiles","assets/tuxmon-sample-32px-extruded.png");
    this.load.atlas("atlas","assets/js/astro-0.png","assets/js/astro.json"); //matodo atlas
  }
  let player;
  function create(){
    const map = this.make.tilemap({key: "map"});
    const tileset = map.addTilesetImage("tuxmon-sample-32px-extruded","tiles");
    const belowLayer = map.createStaticLayer("Below player", tileset, 0, 0);
    const aboveLayer = map.createStaticLayer("Above player", tileset, 0, 0);
    aboveLayer.setCollisionByProperty({collides: true});
    const spawnPoint = map.findObject("Object", obj => obj.name === "spawn Point" );
    player = this.physics.add.sprite(400,350, "atlas", "astro-0.png");
    cursors = this.input.keyboard.createCursorKeys();
    this.physics.add.collider(player, aboveLayer);
    }

  function update (time, delta){
    player.body.setVelocity(0);
    //movimenti orizzontali
    if (cursors.left.isDown){
      player.body.setVelocityX(-100);
    } else if (cursors.right.isDown){
      player.body.setVelocityX(100);
    }
    //movimenti verticali
    if (cursors.up.isDown){
      player.body.setVelocityY(-100);
    } else if (cursors.down.isDown){
      player.body.setVelocityY(100);
    }

}
