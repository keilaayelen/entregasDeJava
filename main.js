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
    let edad = prompt("Ingrese su edad");
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


