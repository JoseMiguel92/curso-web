var display;
var zero = true;
var valor = 0;
var opt;
var dec= true;

function number(x){
    switch(x){
        case 9:
            addNumber(9);
            break;
        case 8:
            addNumber(8);
            break;
        case 7:
            addNumber(7);
            break;
        case 6:
            addNumber(6);
            break;
        case 5:
            addNumber(5);
            break;
        case 4:
            addNumber(4);
            break;
        case 3:
            addNumber(3);
            break;
        case 2:
            addNumber(2);
            break;
        case 1:
            addNumber(1);
            break;
        case 0:
            addNumber(0);
            break;
        default:
            break;
    }
}

function addNumber(x){
    display = document.getElementById("pantalla");
    if(x==0 && !zero){
        display.value += x;
    }
    else if(x!=0){
        zero = false;
        display.value += x;
    }
}

function operacion(op){
    valor = document.getElementById("pantalla").value;
    opt = op;
    valor = document.getElementById("pantalla").value = "";
    zero = true;
    switch(opt){
        case "+":

            break;
        case "+":

            break;
        case "*":

            break;
        case "/":

            break;
        case "/":

            break;
        default: break;
    }
}

function resultdo(){
    var display = document.getElementById("pantalla");
}

function decimal(){
    if(zero){
        document.getElementById("pantalla").value="0.";
    }else if(dec){
        document.getElementById("pantalla").value += ".";
    }
    dec = false;
}

function CE(){
    document.getElementById("pantalla").value="";
    dec=true;
    zero=true;
}
