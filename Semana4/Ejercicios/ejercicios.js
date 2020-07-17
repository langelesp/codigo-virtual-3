//Solucion de ejercios propuestos página 88
/*Pregunta 3.2
Realice un algoritmo para determinar el sueldo semanal de un trabajador
con base en las horas trabajadas y el pago por hora, considerando que 
después de las 40 horas cada hora se considera como
excedente y se paga el doble.Construya el diagrama de flujo, el
pseudocódigo y el diagrama  
let sueldoBasico = 900;
let costoHora = 900 / 40;
let horasTrabajados = +prompt("Ingrese Horas Trabajadas");
let horasExtras = 0;
let costoHorasExtras = 0;
if (horasTrabajados > 40) {
    horasExtras = costoHora*(horasTrabajados - 40)   
}
console.log(`Sueldo Básico: ${sueldoBasico} - Costo Hora ${costoHora} - Horas extrasTrabajados ${horasTrabajados - 40} - Total Horas Extras S/. ${horasExtras}`);
console.log(`Total Sueldo Semanal: ${sueldoBasico+horasExtras}`);

/* Pregunta 3.3
El 14 de febrero una persona desea comprarle un regalo al ser querido
que más aprecia en ese momento, su dilema radica en qué regalo
puede hacerle, las alternativas que tiene son las siguientes:
Regalo Costo
Tarjeta $10.00 o menos
Chocolates $11.00 a $100.00
Flores $101.00 a $250.00
Anillo Más de $251.00
Se requiere un diagrama de flujo con el algoritmo que ayude a determinar
qué regalo se le puede comprar a ese ser tan especial por el
día del amor y la amistad. */

/*Pregunta 3.4
El dueño de un estacionamiento requiere un diagrama de flujo con
el algoritmo que le permita determinar cuánto debe cobrar por el
uso del estacionamiento a sus clientes.Las tarifas que se tienen son
las siguientes:
Las dos primeras horas a $5.00 c / u.
Las siguientes tres a $4.00 c / u.
Las cinco siguientes a $3.00 c / u.
Después de diez horas el costo por cada una es de dos pesos. 
//__________________________________________________

let costoDosPrimerasHoras = 5;
let costoTresSiguientesHoras = 4;
let costoCincoSiguientesHoras = 3;
let costoDespuesDiezHoras = 2;
let totalPagar = 0;
let nroHoras = +prompt("ingrese la cantidad de horas");
console.log(`Total Hotas ${nroHoras}`);
if (nroHoras <= 2) {
    totalPagar = nroHoras * 5;
    console.log(`total a pagar por 2 horas S/. ${totalPagar}`)    
} 
if (nroHoras >=3  && nroHoras <= 5) {
    //totalPagar = 2 * 5 + (nroHoras - 2) * 4;    
    totalPagar = (2 * 5) + (nroHoras - 2) * 4;    
    console.log(`total a pagar por las 2 primeras horas S/. ${2*5}`)    
    console.log(`total a pagar por ${nroHoras-2} restantes S/. ${(nroHoras-2)*4}`)    
}
if (nroHoras >= 6 && nroHoras <= 10) {
    //totalPagar = 2 * 5 + 3 * 4 + (nroHoras - 5) * 3;
    totalPagar = 22 + (nroHoras - 5) * 3;
    console.log(`total a pagar por las 2 primeras horas ${2 * 5}`)  
    console.log(`total a pagar por las 3 proximas horas ${12}`)  
    console.log(`total a pagar por ${nroHoras - 5} restantes S/. ${(nroHoras - 5) * 3}`)    
    //console.log(`total a pagar por las 5 proximas horas ${totalPagar}`)    
}
if (nroHoras > 10) {
    //totalPagar = 2 * 5 + 3 * 4 + 3 * 5 + (nroHoras - 10) * 2;
    totalPagar = 37 + (nroHoras - 10) * 2;
    console.log(`total a pagar por las 2 primeras horas S/. ${2 * 5}`)
    console.log(`total a pagar por las 3 proximas horas S/. ${12}`) 
    console.log(`total a pagar por las 5 proximas horas S/. ${15}`) 
    console.log(`total a pagar por ${nroHoras - 10} restantes S/. ${(nroHoras - 10) * 2}`)    
    //console.log(`total a pagar despuest de la 10 hora ${totalPagar}`)    
}
console.log(`total a pagar S/. ${totalPagar} por ${nroHoras} Horas`)

*/
/*Pregunta 3.8
    Cierta empresa proporciona un bono mensual a sus trabajadores, el cual puede ser por su antigüedad o bien por el monto de su sueldo
    (el que sea mayor), de la siguiente forma:
    Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga
    20 % de su sueldo; cuando es de 5 años o más, 30 %.Ahora bien, el
    bono por concepto de sueldo, si éste es menor a $1000, se da 25 %
    de éste, cuando éste es mayor a $1000, pero menor o igual a $3500,
    se otorga 15 % de su sueldo, para más de $3500. 10 %.Realice el
    algoritmo correspondiente para calcular los dos tipos de bono, asignando
    el mayor, y represéntelo con un diagrama de flujo y pseudocódigo. * /

Proceso BonoMensualPorAntiguedadOPorSueldo*/

let antiguedad = +prompt("Ingrese el valor de la Antiguedad:");
let sueldo =+prompt("Ingrese el valor de su Sueldo: ")
let bonoPorAntiguedad = 0;
let bonoPorSueldo = 0;
let bonoMensual = 0;
if (antiguedad > 2 && antiguedad < 5){
    bonoPorAntiguedad = sueldo * 0.20;
}
if (antiguedad >= 5){
    bonoPorAntiguedad = sueldo * 0.30;
}
if (sueldo <= 1000) {
    bonoPorSueldo = sueldo * 0.25;
}
if (sueldo > 1000 && sueldo<=3500) {
    bonoPorSueldo = sueldo * 0.15;
}
if (sueldo > 3500) {
    bonoPorSueldo = sueldo * 0.10;
}
if (bonoPorAntiguedad > bonoPorSueldo) {
    bonoMensual= bonoPorAntiguedad;
} else {
    bonoMensual = bonoPorSueldo;
}
console.log(`Bono mensual:  ${bonoMensual}`);
console.log(`Bono por antiguedad: ${bonoPorAntiguedad}`)
console.log(`Bono por sueldo: ${bonoPorSueldo}`)
