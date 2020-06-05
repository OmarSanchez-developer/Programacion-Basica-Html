class Billete
{
    constructor(v, c, n){
        this.imagen = new Image();
       // this.total = this.valor * this.cantidad;
        this.valor = v;
        this.cantidad = c;
        this.nombre = n;
        this.imagen.src = imagenes[this.nombre];   
    }
}
var caja = [];
var entregado = [];
var imagenes = [];
imagenes["b200"] = "200.jpg";
imagenes["b50"] = "50.jpg";
imagenes["b20"] = "20.jpg";
var disponible = [];

caja.push(new Billete(200, 30, "b200"));
caja.push(new Billete(50, 20, "b50"));
caja.push(new Billete(20, 10, "b20"));

var dinero = 0;
var div = 0;
var papeles = 0;
var reserva = 0;
var debito = 0;

function entregarDinero(){
    cajon = document.getElementById("dinero");
    dinero = parseInt(cajon.value);
    //resultado.innerHTML += "Cantidad  $" + dinero  + "<br />" ;

    for(var bi of caja){
        if(dinero > 0){
            div = Math.floor(dinero / bi.valor);
            if( div > bi.cantidad){
                papeles = bi.cantidad
            }else{
                papeles = div;
            }
            dinero = dinero - (bi.valor * papeles);
            entregado.push(new Billete(bi.valor, papeles, bi.nombre));
            bi.cantidad = bi.cantidad  - papeles; 
            console.log(bi.cantidad);
        }
    }
    if(dinero > 0){
        resultado.innerHTML= "Lo sentimos el cajero no cuenta con esa cantidad o esta denominacion :("+"<br/>";
    }else{
        for( var e of entregado){
            if(e.cantidad > 0){
                resultado.appendChild(e.imagen) + "<br/>";
                resultado.innerHTML += "<p> <br/> retiraste" +e.cantidad + "billetes de $" + e.valor +  "<br/>";
               e.cantidad -= e.cantidad;
                disponible.push(new Billete(bi.valor, papeles), bi.imagen);
            }
        }
        for(var dis of disponible){
            disponible.innerHTML += "Quedan  " + dis.cantidad + " billetes de $" + dis.valor + "<br />";
}
disponible.innerHTML += "Un total de $" +  dis.valor;
  }
  console.log(entregado);
    resultado.innerHTML += "<hr>"
    }

function limpiarPantalla (){ 
    limpiar.innerHTML= " ";
    resultado.innerHTML = " ";
    caja.value=" ";
    entregado= [];
    reserva = 0; 
     } //Funcion Limpiar Pantalla


var saldo = document.getElementById("saldo");
var dispo = document.getElementById("dispo");
var limpiar = document.getElementById("clear");
var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
limpiar.addEventListener("click", limpiarPantalla);