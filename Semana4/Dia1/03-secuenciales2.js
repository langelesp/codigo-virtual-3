// 2.7 propuesto
/*
let costoBoleto = 0;

let recorrer = +prompt("Ingrese los kilometros a recorrer");
let costoKilometro = +prompt("Ingrese el costo por Kilometro");

costoBoleto = recorrer * costoKilometro;

console.log(`Costo por boleto => ${costoBoleto} soles.`);

let edad = +prompt("ingrese su edad");
let peso = +prompt("ingrese su peso");

if (edad > 17) {
    if (peso >= 85) {
        console.log("no hay pase, quedate en tu casa ");
    } else {
        console.log("si hay pase laboral");

    }
} else {
    console.log("no hay pase laboral ");
}


let anio = +prompt("ingrese año");
let flagAnio = (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0));
if (!flagAnio) {
    
    console.log("no es bisiesto")
}
else{
    console.log("es bisiesto");
}
*/

let nro1 = +prompt("Ingrese Primer Numero"); //15
let nro2 = +prompt("Ingrese Primer Numero"); //8
let nro3 = +prompt("Ingrese Primer Numero"); //60
let mayor = 0
if(nro1 > nro2){
    if (nro1 > nro3) {
        mayor = nro1;
        console.log(mayor);
    } else {
        mayor = nro3;
    }
}else{
    if (nro2 > nro3) {
        mayor = nro2;
    } else {
        mayor = nro3;
    }    
}
console.log(`El mayor es ${mayor}` );