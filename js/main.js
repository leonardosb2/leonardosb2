$(document).ready(function(){
    $('.slider-grid').slick({
        dots: true,
        arrows:false,
    });
});
$(document).ready(function(){
    $('.slider-woman').slick({
        arrows:true,
        nextArrow: "<i class='icon-right fa fa-angle-right  fa-3x'></i>",
        prevArrow: "<i class='icon-left fa fa-angle-left  fa-3x'></i>",
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
              }
            }
          ]
    });
});



window.onload = function() { 
    
    animateprogress(".html5",99);
    animateprogress(".php", 80);
    animateprogress(".css",99);
    animateprogress(".python",99);
    animateprogress(".javascript",70);
    animateprogress(".nodejs",100);
    animateprogress(".nodejs1",75);
    animateprogress(".nodejs2",50);
    animateprogress(".nodejs3",90);
    
} 	
document.querySelector (".boton").addEventListener ("click", function() { 
    animateprogress(".html5",91);
    animateprogress(".php",72);
    animateprogress(".css",86);
    animateprogress(".python",90);
    animateprogress(".javascript",79);
    animateprogress(".nodejs",36);

});

function animateprogress (id, val){    
 
 
    var getRequestAnimationFrame = function () {  /* <------- Declaro getRequestAnimationFrame intentando obtener la máxima compatibilidad con todos los navegadores */
        return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||  
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function ( callback ){
            window.setTimeout(enroute, 1 / 60 * 1000);
        };
         
    };
     
    var fpAnimationFrame = getRequestAnimationFrame();   /* <--- Declaro una instancia de getRequestAnimationFrame para llamar a la función animación */
    var i = 0;
    var animacion = function () {
             
    if (i<=val)
        {
            document.querySelector(id).setAttribute("value",i);      /* <----  Incremento el valor de la barra de progreso */
            document.querySelector(id+"+ span").innerHTML = i+"%";     /* <---- Incremento el porcentaje y lo muestro en la etiqueta span */
            i++;
            fpAnimationFrame(animacion);          /* <------------------ Mientras que el contador no llega al porcentaje fijado la función vuelve a llamarse con fpAnimationFrame     */
        }
                                         
    }
 
        fpAnimationFrame(animacion);   /*  <---- Llamo la función animación por primera vez usando fpAnimationFrame para que se ejecute a 60fps  */
                 
}