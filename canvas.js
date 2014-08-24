var lienzo, dibujo, t, b;
function inicio(){
	t = document.getElementById("usuario");
	b = document.getElementById("dibujalo");
	dibujo = document.getElementById("dibujito");
	lienzo = dibujo.getContext("2d");

	b.addEventListener("click", dibujarGrilla);

	lienzo.beginPath();
	lienzo.strokeStyle = "#00F";
	lienzo.fillStyle = "#00F";
	lienzo.arc(150,150,100,(Math.PI * 2),false);
	lienzo.closePath();
	lienzo.fill();
	lienzo.stroke();
}

function dibujarGrilla(){
	
	var l = lienzo;
	var rayas = Number(t.value); 
	var ancho = 300, alto = 300;
	var linea, punto;
	var anchoLinea = ancho / rayas;
	var limiteX = ancho / anchoLinea;
	var limiteY = alto / anchoLinea;


	for(linea = 0; linea <= limiteX; linea++){

        l.strokeStyle = "#FFFF00";
		punto = linea * anchoLinea;
		l.beginPath();
		l.moveTo(punto, 0);
		l.lineTo(ancho, punto );
		l.stroke();
		l.closePath();
	} 

	for(linea = 0; linea <= limiteY; linea++){

        l.strokeStyle = "#FF0000";
		punto = linea * anchoLinea;
		l.beginPath();
		l.moveTo(0, punto);
		l.lineTo(punto, ancho);
		l.stroke()
		l.closePath();

	}
}
