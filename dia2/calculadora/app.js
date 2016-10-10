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
    }
}
function addNumber(x){
    var display = document.getElementById("pantalla");
    display.value += x;
}
