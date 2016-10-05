//variables globales
//var soyGlobal;

function start(){
    var f = funcion1(4);

    var f2 = f(3);

    alert(f2);
}

function funcion1(p){
    return function(y){
        return p+y;
    }
}
