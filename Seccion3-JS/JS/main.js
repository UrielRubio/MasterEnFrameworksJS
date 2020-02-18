// Comment line
/* 
Comment block
*/
//alert("Hola soy un mensaje generado con alert!!!!");
// Variables
var nombre = "Uriel"; //String
var altura = 180;  //numero

//Concatenacion

var concatenacion = nombre + " " + altura;

document.writeln(concatenacion);
document.write("Texto mediante document.write");

var datos = document.getElementById("datos");
datos.innerHTML = concatenacion + ". Modificado mediante .innerHTML";
datos.innerHTML = `
    <h1>Soy la caja de texto modificada mediante comillas simples invertidas</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura}</h3>
`;

if(altura>160)
    datos.innerHTML += '<h3>Soy una persona ALTA.</h3>';
else
    datos.innerHTML += '<h3>Soy una persona BAJA.</h3>';

for(var i=2019; i<=2020;i++)
    datos.innerHTML += '<h2>Estamos en el anio '+ i +'</h2>';

function muestraNombre(nombre, altura){
    var misDatos = `
            <hr />
            <h2>Datos agregados usando una función</h2>
            <h3>
                El nombre del usuario es: ${nombre}
            </h3>
            <h4>
                Mide: ${altura}
            </h4>
        `; 
        if(altura>160)
            misDatos += '<h3>Soy una persona ALTA.</h3>';
        else
            misDatos += '<h3>Soy una persona BAJA.</h3>';

    return misDatos;
}
function imprimir(nombre, altura, areaDiv){
    areaDiv.innerHTML += muestraNombre(nombre, altura);
}

imprimir("Dylan", 67, document.getElementById('datos'));
imprimir("PAloma", 167, document.getElementById('datos'));


var nombres = ["Victor", "Antonio", "Joaquin"];
var alturas = [198, 165, 87];

//       FORMA 1 DE RECORRER ARRAYS
document.write("<hr /><h3>Listado de nombre en un array recorrido con un ciclo for</h3>");
for(var i = 0; i < nombres.length; i++){
    document.write("Su nombre es: " + nombres[i] + "; ");
    document.write("Mide: " + alturas[i] + "; ");
    if(alturas[i] < 160)
        document.write(" Es una persona BAJA <br />");
    else   
        document.write(" Es una persona ALTA <br />");
}

//       FORMA 2 DE RECORRER ARRAYS
document.write("<hr /><h3>Listado de nombre en un array usando funcion</h3>");
nombres.forEach(function(nombre){
    document.write("El nombre es: " + nombre + "<br />");
});

//       FORMA 3 DE RECORRER ARRAYS
document.write("<hr /><h3>Listado de nombre en un array usando funcion callback</h3>");
alturas.forEach((altura) =>{
    document.write("la altura es: " + altura + "; ");
    if(altura < 160)
        document.write(" Es una persona BAJA <br />");
    else   
        document.write(" Es una persona ALTA <br />");
});


// OBJETOS JSON
var coche = {
    modelo: 'Mercedes clase A',
    maxima: 500,
    antiguedad: 2020,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad, this.propiedad1);
    },
    propiedad1: "Cualquier valor"
};

document.write('<hr /><h1> Trabajando con objetos JSON</h1><hr />');
document.write(coche.modelo);
document.write("<p>A continuación se muestran datos en console. Abrir la consola para ver los datos.</p>");
coche.mostrarDatos();
console.log(coche);

// PROMESAS
var saludar = new Promise((resolve, reject) =>{
    
    setTimeout(() =>{
        let saludo = "Hola muy buenas a todos Chavales !!";
        saludo = false;
        if(saludo)
            resolve(saludo);
        else   
            reject("No hay saludo disponible");          
    }, 2000);
});

saludar.then(resultado => {
    alert(resultado);
    document.write("<hr /><h1>Trabajando con PROMESAS</h1><hr />");
    document.write(resultado + "<br />");
    document.write("Este mensaje se agrega una vez llegue el mensaje asíncrono.");
}).catch(err =>{
    alert(err);
});