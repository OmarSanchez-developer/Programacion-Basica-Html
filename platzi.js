var teclas = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
   };
var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
var vp = document.addEventListener("keydown", MoverCerdo);

var fondo = {
    url: "tile.png",
    cargaOK: false
}
var vaca = {
    url: "vaca.png",
    cargaOk: false
}
var pollo = {
    url: "pollo.png",
    cargaOk: false
}
var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};

var cantidadVaca = aleatorio(1,4);
var cantidadPollo = aleatorio(2,3);
var cantidadCerdo = aleatorio(1,5);
//var cantidad = aleatorio(3,5);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", CargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", CargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", CargarCerdos);


function cargarFondo(){    
 fondo.cargaOK = true;
 dibujar();
}
function CargarVacas(){
 vaca.cargaOK = true;
 dibujar();
}
function CargarPollos(){
 pollo.cargaOK = true;
 dibujar();
}
function CargarCerdos(){
 cerdo.cargaOK = true;
 dibujar();
}

function dibujar(){
  
   if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0);
   }
   if(vaca.cargaOK){
      console.log("Cantidad vacas:" + cantidadVaca);
       for (var v=0; v < cantidadVaca; v++){
        var x = aleatorio(0,100);
        var y = aleatorio(0,100);
        var x = x * 4;
        papel.drawImage(vaca.imagen, x, y);
       }
   }
   if(pollo.cargaOK){
        //var cantidad = aleatorio(5,25);
        console.log("Cantidad Pollos:" + cantidadPollo);
        for (var v=0; v < cantidadPollo; v++){
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        papel.drawImage(pollo.imagen, x, y);
    }
   }
   if(cerdo.cargaOK){
        //var cantidad = aleatorio(5,25);
        console.log("Cantidad Cerdos:" +cantidadCerdo);
        for (var v=0; v < cantidadCerdo; v++){
        var x = aleatorio(0,420);
        var y = aleatorio(0,420);
        papel.drawImage(cerdo.imagen, x, y);
      }
    }
  }
  var x_cerdo = 150;
  var y_cerdo = 150;
function MoverCerdo(evento){   
   
    switch(evento.keyCode)
    {
        case teclas.UP:
        y_cerdo = y_cerdo -10;
        papel.drawImage(fondo.imagen,0,0);
        papel.drawImage(cerdo.imagen,x_cerdo,y_cerdo);
        console.log("arriba");
        break;

        case teclas.DOWN:
            y_cerdo = y_cerdo +10;
            papel.drawImage(fondo.imagen,0,0);
            papel.drawImage(cerdo.imagen,x_cerdo,y_cerdo);
        console.log("abajo");  

         break; 

        case teclas.LEFT:
          //  papel.drawImage(fondo.imagen,0,0);
          x_cerdo = x_cerdo -10;
          papel.drawImage(fondo.imagen,0,0);
          papel.drawImage(cerdo.imagen,x_cerdo,y_cerdo);
        console.log("izquierda");
     break;  
        case teclas.RIGHT:
            x_cerdo = x_cerdo +10 ;
            papel.drawImage(fondo.imagen,0,0);
            papel.drawImage(cerdo.imagen,x_cerdo,y_cerdo);
      console.log("derecha");
      break;
      default:
    }
}
// FUNCION FOR PARA ESCRIBIR NUMEROS ALEATORIOS
/*
var z;
for (var i=0; i<10; i++){
    z = aleatorio(5, 0);
    document.write(z + ", ");
}
*/
function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}