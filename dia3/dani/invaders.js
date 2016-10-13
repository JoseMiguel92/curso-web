var display;
var width;
var height;
var jugador;
var enemigos;
var disparos = [];
var score = 0;

window.onkeydown = function(e){
  switch (e.keyCode) {
    case 39:
        jugador.posX += 5;
      break;
    case 37:
        jugador.posX -= 5;
      break;

    case 32:
        var disp = new disparo(jugador.posX, jugador.posY);
        disparos.push(disp);
      break;
    default:

  }
}

window.onload = function(){
  var temp = document.getElementById("display");
  temp.width = window.innerWidth -100;
  temp.height = window.innerHeight -100;
  width = temp.width;
  height = temp.height;
  display = temp.getContext("2d");

  jugador = new Player(100, 780, 150, 30);
  enemigos = new Enemies();
  for(var x = 0; x <= 4; x++){
    for(var y = 0; y < 4; y++){
      var enemigo = new Enemy(x * 400, y*70, 50,50);
      enemigos.collect.push(enemigo);
    }
  }
  drawPlayer();
}


function drawPlayer(){
  display.fillStyle="#000";
  display.fillRect(0,0, width, height);
  display.fillStyle="#da2f1d";
  display.fillRect(jugador.posX, jugador.posY, jugador.width, jugador.height);
  drawEnemies();
  for(var x= 0 ; x < disparos.length;x++){
    display.fillStyle="#FFF";
    display.fillRect(disparos[x].posX, disparos[x].posY, 5,10);
  }
  display.fillStyle="#FFF";
  display.font="50px,Arial";
  display.fillText();


}

function drawEnemies(){
  for(var x = 0; x < enemigos.collect.length; x++){
      if(enemigos.
      display.fillRect(enemigos.collect[x].posX, enemigos.collect[x].posY, enemigos.collect[x].width, enemigos.collect[x].height);
  }

  update()
}

function update(){
    for(var x = 0 ; x < disparos.length; x++){
        disparos[x].update();
    }
  enemigos.update();

    for (var x = 0; x < diparos.length; x++){
        for(var y = 0; y < enemigos.collect.length; y++){
            if( enemigos.collect[y].colision(disparos[x])){
                enemigos.collect[y].life =false;
                disparos.splice(y,1);
                score += 10;
            }
        }
    }
  setTimeout(drawPlayer, 10);
}

function estrellas(){
  display.fillStyle="#FFF";
  display.fillRect(0,0, width, height);

  var posx;
  var posy;
  var size;
  display.fillStyle="#FFF";
  for(var x = 0; x < 300; x++){
    posx = Math.random()* width;
    posy = Math.random()* height;
    size = Math.random()*10;
    display.fillRect(posx,posy, size, size);
  }
}


function Player(posx, posy, w, h){
  this.posX = posx;
  this.posY = posy;
  this.width = w;
  this.height = h;
}

function Enemy(posx, posy, w, h){
  this.posX = posx;
  this.posY = posy;
  this.width = w;
  this.height = h;
    this.life = true;
}

Enemy.prototype.update = function(x, l){
  this.posX += x;
  this.posY += l*50;
}

function Enemies(){
  this.collect = [];
  this.speed = 5;
  this.line = 0;
}

Enemy.prototype.colision = function(disparo){
    if((this.life)&&(disparo.posX > this.posX && disparo.posX < this.posX + width) &&
       (disparo.posY > this.posY && disparo.posY < this.posY + height)){
        return true;
    }
}

Enemies.prototype.update = function(){
  for(var x = 0; x < this.collect.length; x++){
    if(this.collect[x].posX + this.collect[x].width > width || this.collect[x].posX < 0){
      this.speed *=-1;
      this.line = 1;
      break;
    }
  }

  for(var x = 0; x < this.collect.length; x++){
    this.collect[x].update(this.speed, this.line);
  }

  this.line = 0;

}

function disparo(x,y){
    this.posX = x;
    this.posY = y;
}

disparo.prototype.update = function(){
    this.posY -= 10;
}
