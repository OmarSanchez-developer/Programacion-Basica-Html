   document.addEventListener("mousedown", valorInicial);
   document.addEventListener("mouseup", terminar);
   document.addEventListener("mousemove", dibujarMouse);
   document.getElementById("limpiar", limpiarCanvas);
   
   var cuadrito = document.getElementById("area_de_dibujo");
   var gomita = document.getElementById("limpiar");
   var papel = cuadrito.getContext("2d");
   var x = 100;
   var y = 100;
   var xi = 0;
   var xf = 0;
   var yi = 0;
   var yf = 0;
   var iniciar;
   
   dibujarLinea("black",0,0,300,0, papel);
   dibujarLinea("black",300,0,300,300, papel);
   dibujarLinea("black",0,0,0,300, papel);
   dibujarLinea("black",0,300,300,300, papel);
   
   function valorInicial (evento)
   {
       xi = evento.layerX;
       yi = evento.layerY;
       iniciar = 1;
   }
   function terminar (evento)
   {
     iniciar=0;
   }
   function dibujarMouse (evento)
   {
     
     var colorcito ="green";
     if(iniciar==1)
     {
       dibujarLinea(colorcito,xi,yi,evento.layerX,evento.layerY,papel);
       xi = evento.layerX;
       yi = evento.layerY;
     }
   }
   function limpiarCanvas()
   {
     papel.clearRect(0,0,cuadro.width, cuadro.height);
   
     dibujarLinea(colorBorde, 1, 1, 1, 299, papel);
     dibujarLinea(colorBorde, 1, 299, 299, 299, papel);
     dibujarLinea(colorBorde, 299, 299, 299, 1, papel);
     dibujarLinea(colorBorde, 299, 1, 1, 1, papel);
   }
   