$(document).ready(function(){
    $.ajax(
    {
        type: "GET",
        url: "https://api.cognitive.microsoft.com/bing/v5.0/news/",
        headers:{
            "Ocp-Apim-Subscription-Key" : "0bf46728db11450c81635e47631d176e",
            success: function(data){
                for(var x of data.value){
                    var noticia = $("<div class='noticia'></div>");
                    var noticiaImagen = $("<div class='noticia-imagen'></div>");
                    var noticiaContenido = $("<div class='noticia-content'></div>'");
                    var imagen = $("<img class='noticia-imagen' src="+
                                        x.image.thumbnail.contentUrl
                                   +"/>");
                    var titulo = $("<h2>"+
                                   x.name
                                   +"</h2>");
                    var parrafo = $("<p>"+
                                    x.description
                                    +"</p>");
                    noticiaContenido.append(titulo,descripcion);
                    noticiaImagen.append(imagen);
                    noticia.append(noticiaImagen,noticiaContenido);
                }
            },
            error: function(data){
                alert("Mal.");
            }
        }
    });
});
