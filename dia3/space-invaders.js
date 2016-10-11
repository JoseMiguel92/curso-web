var display;
var width;
var height;
var jugador;
var enemigos;


window.onkeydown = function(e){
    switch(e.keyCode){
        case 39:
            jugador.posx += 5;
            break;
        case 37:
            jugador.posy -= 5;
            break;
    }
}

window.onload = function(){
    var temp = document.getElementById("pantalla");
    width = temp.width;
    height = temp.height;
    display = temp.getContext("2d");

    jugador = new Player(100,750,200,30);

    enemigos = new Enemies();

    for(var x = 0; x <= 5;++){
        for(var y = 0; y <= 4; y++){
           var enemigo = new Enemy(x*50, y*10,30,30);
            enemigos.collect.push(enemigo);
        }
    }
    drawPlayer();
    stars();
}

function stars(){
    display.fillStyle="#000";
    display.fillRect(0,0,width,height);

    var posX;
    var posY;
    var size;

    display.fillStyle="#FFF";
    for(var  x = 0; x < 300; x++){
        posX = Math.random()*width;
        posY = Math.random()*height;

    }
}
function drawPlayer(){
    display.fillStyle="#da2f1d";
    display.fillRect(jugador.posx, jugador.posy, jugador.width, jugador.height);
    drawEnemies();

}

function drawEnemies(){
    for(var x = 0; x < enemigos.collect.length;++){
        display.fillRect(enemigos.collect[x].posx,enemigos.collect[x].posy,enemigos.collect[x].width,enemigos.collect[x].height);
    }
    update();
}

function update(){
    enemigos.update();
    setTimeout(drawPlayer, 10);

}

function Player(posX,posY,w,h){
    this.posx = posX;
    this.posy = posY;
    this.width = w;
    this.height = h;

}

function Enemy(x,y,w,h){
    this.posx = x;
    this.posy = y;
    this.width = w;
    this.height = h;
}

function Enemies(){
    this.collect = [];
    this.speed = 5;
    this.line = 0;
}

Enemies.prototype.addEnemy = function addEnemy(e){

}

Enemies.prototype.update = function(){
    for(var x = 0; x < this.collect.length; x++){
        if(this.collect[x].posx + this.collect[x].width > width || this.collect[x]){
            this.speed *= -1;
            this.line = 1;
            break;
        }
    }
    for(var x = 0;x < this.collect.length; x++){
        this.collect[x].update(this.speed);
    }
}
