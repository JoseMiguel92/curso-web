window.onload = start;

function start(){
   /*
   var nodo = document.getElementById("ejemplo");
    nodo.innerHTML;
    //Devuelve el contenido del elemento con id EJEMPLO
    */
    var l = document.createElement("div");
    l.innerHTML = "Hola soy un div creado de cero."
    l.setAttribute("id","holamundo");
    document.body.appendChild(l);
    document.body.removeChild(l);

}
