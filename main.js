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

// While y Switch

let nombre = (prompt("Ingrese su nombre"));

while (nombre != "") {
    switch (nombre) {
        case "aye":
            alert("Holiwis");
            break;

        default:
            alert("Bienvenido" + " " + nombre);
            break;
    }

    nombre = prompt("Ingrese su nombre")

}

// IF y ELSE

let edad = parseInt(prompt("Ingrese su edad"));

if (edad < 18) {
    alert("No puedes ingresar");
} else {
    alert("Puedes ingresar, adelante.");
    edad = prompt("Ingrese su edad")
}

// Function despedir

function despedir() {
    let despedir = prompt("Disfrutaste tu experiencia con nosotros?")
    alert("Genial esperamos volverte a ver!")
}

//Llamado a function
despedir();




