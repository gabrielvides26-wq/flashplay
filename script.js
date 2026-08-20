const config={type:Phaser.AUTO,parent:'game',scale:{mode:Phaser.Scale.FIT,autoCenter:Phaser.Scale.CENTER_BOTH,width:360,height:640},
physics:{default:'arcade',arcade:{gravity:{y:900}}},
scene:{preload,create,update}};
new Phaser.Game(config);
let wolf,obs,score=0,t;
function preload(){}
function create(){
const g=this.add.graphics();
g.fillStyle(0x081020).fillRect(0,0,360,640);
for(let i=0;i<120;i++){g.fillStyle(0x00d9ff,0.25).fillCircle(Phaser.Math.Between(0,360),Phaser.Math.Between(0,640),Phaser.Math.Between(1,3));}
g.generateTexture('bg',360,640);g.clear();
g.fillStyle(0x6cf7ff).fillTriangle(0,50,30,0,60,50);
g.fillStyle(0xffffff).fillCircle(30,28,6);g.generateTexture('wolf',60,50);g.clear();
g.fillStyle(0xff2d55).fillRect(0,0,24,50);g.generateTexture('log',24,50);g.destroy();
this.add.image(180,320,'bg');
wolf=this.physics.add.sprite(70,520,'wolf').setCollideWorldBounds(true);
obs=this.physics.add.group();
this.input.on('pointerdown',()=>{if(wolf.body.blocked.down)wolf.setVelocityY(-480);});
this.physics.add.collider(wolf,obs,()=>{this.scene.restart();score=0;});
this.add.text(16,16,'🐺 WOLF RUN',{font:'22px Arial',fill:'#6cf7ff'});
t=this.add.text(16,46,'Puntos: 0',{font:'18px Arial',fill:'#fff'});
this.time.addEvent({delay:1200,loop:true,callback:()=>{const o=obs.create(390,540,'log');o.setVelocityX(-260);o.body.allowGravity=false;}});
}
function update(){obs.children.each(o=>{if(o.x<-40)o.destroy();});score++;t.setText('Puntos: '+Math.floor(score/10));}
