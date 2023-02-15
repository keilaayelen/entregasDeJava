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
    const nuevaEleccion = new ElegirHembra(hembras, color)
    arrayCarrito2.push(nuevaEleccion)
    alert("Adopcion en curso")
}

let arrayCarrito2 = []

elegirGato();

// Elegir que alimento comprará
class ElegirAlimento {
    constructor(whyskas, proplan, purina, catchow,) {
        this.whyskas = whyskas;
        this.proplan = proplan;
        this.purina = purina;
        this.catchow = catchow;
    }
}

let precios = [
    { marca: "whyskas", precio: "3800" },
    { marca: "proplan", precio: "2500" },
    { marca: "purina", precio: "3000" },
    { marca: "catchow", precio: "4500" },
]

function cargarAlimentos(){
    let marca = prompt("Ingrese la marca, tenemos Whyskas, Proplan, Purina y Catchow");
    let precio = prompt("Ingrese un valor, puede elegir entre 3800, 2500, 3000 y 4500");
    let kg = prompt("Ingrese cuanto peso quiere, tenemos de 1kg, 10kg 15kg y 25kg con 5kg de regalo el ultimo.");
    const nuevaCompra = new ElegirAlimento (marca, precio, kg)
    arrayCarrito3.push(nuevaCompra)
    alert ("Producto añadido al carrito")
}

cargarAlimentos();

function verCompra() {
    arrayCarrito3.forEach((elemento) => {
        alert(`Usted eligio ${elemento.marca} con un precio de ${elemento.precio} y un peso de ${elemento.kg}`)
    })
}

verCompra();

let arrayCarrito3 = []













function despedir() {
    let despedir = prompt("Disfrutaste tu experiencia con nosotros?")
    alert("Genial esperamos volverte a ver!")
}

//Llamado a function
despedir();
