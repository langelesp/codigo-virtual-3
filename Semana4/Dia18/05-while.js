let numeros = [0, 25, -9, -8, 0, 0, 28, 7864, -958, 9, -9, 0];
let contador = 0;
let temporal = 0;
let negativos = 0;
let positivos = 0;
let ceros = 0;
while (contador <= numeros.length) {
    console.log(numeros[contador]);
    temporal = numeros[contador];
    console.log(`valor de temporal ${temporal}`);
    switch (temporal) {
        case temporal> 1:
            positivos += 1;
            //break;
        case temporal < 1:
            negativos += 1;
            //break;
        case temporal == 0:
            ceros += 1;
            //break;             
    }        
    contador += 1;
}
console.log(`positivos ${positivos}  Negativos ${negativos}  Ceros ${ceros}`);