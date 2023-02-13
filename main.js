// Function saludar
function saludar() {
    let saludar = prompt("Hola! estamos contentos de que estes aqui, eres un cliente nuestro?")
    if (saludar === "si") {
        alert("Genial, verifiquemos tus datos..")
    } else {
        alert("A fin de conservar nuestra confidencialidad, luego de unas preguntas crearemos un usuario juntos, adelante!")
    }
}

//Llamado a function
saludar();


// Function pedir datos
function pedirDatos() {
    let apellido = prompt("Ingrese su apellido");
    let nombre = prompt("Ingrese su nombre");
    let edad = Number(prompt("Ingrese su edad"));
    let mensaje = `El nombre completo y edad ingresados es:  ${apellido} ${nombre} ${edad}`;
    alert(mensaje);
}

//Llamado a function
pedirDatos();

//Validacion de datos con WHILE
let respuesta;
let fuera = true
while (fuera) {
    respuesta = prompt("Sus datos ingresados son correctos?");

    if (respuesta === "si") {
        alert("Puedes continuar");
        fuera = false;
    } else {
        alert("Vuelva a ingresar bien sus datos por favor")
        pedirDatos();
    }
}


class Gatitos {
    constructor(sexo, color, edad) {
        this.sexo = sexo;
        this.color = color;
        this.edad = edad;
    }
}

let sexo = [
    { sexo: "Hembra", color: "claro" },
    { sexo: "Macho", color: "oscuro" },
]

function adoptar() {
    let gatos = prompt("Ingrese el sexo que desea adoptar");
    let colores = prompt("Ingrese si quiere claro u oscuro su michi");
    let edades = prompt("Ingrese si quiere un gatito bebe o grande");
    const nuevaAdopcion = new Gatitos(gatos, colores, edades)
    arrayCarrito.push(nuevaAdopcion)
    alert("Adopcion en curso")
}

let arrayCarrito = []


//Llamado a function
adoptar();

function verAdopcion() {
    arrayCarrito.forEach((gatito) => {
        alert(`Usted eligio ${gatito.sexo} y de un colorcito ${gatito.color} con una edad de ${gatito.edad}`)
    })
}

//Llamado a function
verAdopcion();

// Elegir a quien adoptar
class ElegirHembra {
    constructor(lupa, tana, micha, flora, juana) {
        this.lupa = lupa;
        this.tana = tana;
        this.micha = micha;
        this.flora = flora;
        this.juana = juana;
    }
}


let hembras = [
    { hembras: "Lupa", color: "claro" },
    { hembras: "Tana", color: "oscuro" },
    { hembras: "Micha", color: "claro" },
    { hembras: "Flora", color: "oscuro" },
    { hembras: "Juana", color: "claro" },
]


function elegirGato() {
    let hembras = prompt("Quedan solo hembras, ponga que si para poder continuar");
    let color = prompt("Ingrese si quiere claro u oscuro su pelaje");
    const nuevaEleccion = new Eleccion(hembras, color)
    arrayCarrito2.push(nuevaEleccion)
    alert("Adopcion en curso")
}

let arrayCarrito2 = []

elegirGato();


function despedir() {
    let despedir = prompt("Disfrutaste tu experiencia con nosotros?")
    alert("Genial esperamos volverte a ver!")
}

//Llamado a function
despedir();








/* Ingrese si quiere adoptar a \n 1: Lupa \n 2: Tana \n 3: Micha \n 4: Flora \n 5: Juana  */