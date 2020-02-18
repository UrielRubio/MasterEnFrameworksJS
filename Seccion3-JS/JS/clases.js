class Coche{
    constructor(modelo, velocidad, antiguedad){
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.antiguedad = antiguedad;
    }
    aumentarVelocidad(){
        this.velocidad += 1;
    }
    reducirVelocidad(){
        this.velocidad -= 1;
    }

}

var coche1= new Coche("BMW", 200, 2017);
var coche2= new Coche("Audi", 100, 2018);
var coche3= new Coche("Mercedes", 200, 2013);
var coche4= new Coche("Ranault", 200, 2009);

coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()
coche1.aumentarVelocidad()

console.log(coche1)

var divClases = document.getElementById("divClases");
divClases.innerHTML = `
    <hr /><h1>Trabajando con clases</h1><hr />
    <p>
    Coche modelo: ` + coche2.modelo + `; velocidad: <strong>` + coche2.velocidad + `</strong>
    ; y antigüedad: ` + coche2.antiguedad + `
    </p>
    `;
for(var i=0; i<7; i++)
    coche2.aumentarVelocidad();
divClases.innerHTML += `
    <p>
    Después de aumentar 7 veces la velocidad, los datos son los siguientes.
    </p>
    <p>
    Coche modelo: ` + coche2.modelo + `; velocidad: <strong>` + coche2.velocidad + `</strong>
    ; y antigüedad: ` + coche2.antiguedad + `
    </p>
    `;


class Autobus extends Coche{
    constructor(modelo, velocidad, antiguedad, altura){
        super(modelo, velocidad, antiguedad);
        this.altura = altura;
    }
    mostrarAltura(){
        return "La altura del bus es " + this.altura;
    }
}

var bus1= new Autobus("Pegasus", 200, 2017, 10);
divClases.innerHTML +=`
    <hr /><h1>Herencia</h1>
    <p>
        <strong>Datos del bus:</strong>
        Modelo: ${bus1.modelo}<br />
        velocidad: ${bus1.velocidad}<br />
        antigüedad: ${bus1.antiguedad}<br />
        altura: ${bus1.altura}<br />
    </p>
`;