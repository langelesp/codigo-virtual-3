/* 
Funciones
Declaración de una funcion*/

//1. Funciones que no retornan ni reciben parametros 
function imprimirFecha() {
    let fecha = new Date();
    console.log(fecha);
}

/* 2. Funciones que retornan valor y no reciben parametros*/
function retornarFecha() {
    let fecha = new Date();
    return fecha;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 */
/*3. Funciones que reciben y retornan valor */
function retornarBinomio(a,b){
    let rpta = (a * a) + (2 * a * b) + (b * b);
    return rpta;    
}


//4. Funciones que no retornan valor y que reciben parametros
function imprimirPares(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i]);
        }
    }   
}

//invocar funcion 1
imprimirFecha();

//invocar funcion 2
let nuevaFecha = retornarFecha();
console.log(nuevaFecha);

//invocando a la funcion 3
let binomio = retornarBinomio(2, 6)
console.log(binomio);


//invocando a la funcion 4
let arreglo = [2, 6, 8, 10, 12, 11, 9, 7, 5, 3];
imprimirPares(arreglo);

