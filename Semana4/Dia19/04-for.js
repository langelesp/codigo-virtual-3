let nombres = ["jorge", "teresa", "javier", "leonor", "daniel", "francisca"];
let edades = [20, 15, 75, 68, 45, 25];

let buscar = prompt("Ingrese el nombre a buscar en la base de datos: ");
let encontrado = false;
for (let i = 0; i < nombres.length; i++){
    console.log(`i = ${i}`);
    if (nombres[i] === buscar) {
        console.log(`Encontradi ${buscar}`);
        console.log(`edad: ${edades[i]}`);
        encontrado = true;
        break;
    }
}
if (!encontrado) {
    console.log("No se encontro el usuario");

}