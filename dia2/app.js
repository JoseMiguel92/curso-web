window.onload =
    function start(){
        f1(f2);
    }
window.onkeydown = teclas;

function f1(callback){
    var x = 33;
    alert(parseInt(x) + 6);
    alert("Soy f1");
    callback();
}

function f2(){
    alert("soy f2");
}
function teclas(e){
    alert(e.keyCode + " pulsado.");
}
