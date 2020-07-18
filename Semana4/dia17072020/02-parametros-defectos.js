//Funciones con parametros por defecto

/**
 * 
 * @param {array} nombres 
 * @param {string} busqueda 
 * @returns {boolean}
 */

function buscarNombre(nombres, busqueda) {
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === busqueda) {
            return true;
        }
    }
    return false;
}

let nombres = ["martin", "jaime", "anita", "paola"]
let resultadoBusqueda = buscarNombre(nombres, "paola");
console.log(resultadoBusqueda);