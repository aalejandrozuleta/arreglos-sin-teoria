let j = [200, -100, 45, 78, 32];
console.log(j[2]);
console.log(j[4]);

let f = ["ab", "cd", "ef", "gh"];
console.log(f[1]);
console.log(f[3]);

let aux = [10, true, "k200", 20.7];
aux.forEach((element) => {
    console.log(element);
});

let k = [17, 4, 64, 79, 109, 112];
k.forEach((element) => {
    if (element % 2 !== 0) {
        console.log(element);
    }
});

let h = [true, true, false, true, false];
h[2] = true;
h[3] = false;
console.log(h);

let w = ["wc", "jp", "zx", "qr"];
w[w.indexOf("jp")] = true;
w[w.indexOf("qr")] = 30;
console.log(w);

function recorrerArreglo(arr) {
    arr.forEach((element) => {
        console.log(element);
    });
}
recorrerArreglo([2, 5, 7, 9]);

function contarElementos(arr) {
    return arr.length;
}

console.log(contarElementos([2, 5, 7, 9]));

let arreglo = [30, 44, 54, 89, 100];
console.log(arreglo.indexOf(44));
console.log(arreglo.indexOf(89));
console.log(arreglo.indexOf(70));

function contarElementos(arreglo) {
    let cantidadElementos = arreglo.length;
    return cantidadElementos;
}
let miArreglo = [1, 2, 3, 4, 5];
let cantidadElementos = contarElementos(miArreglo);
console.log(cantidadElementos);

let arregloa = [30, 44, 54, 89, 100];
console.log("El índice del elemento 44 es:", arregloa.indexOf(44));
console.log("El índice del elemento 89 es:", arregloa.indexOf(89));
console.log("El índice del elemento 70 es:", arregloa.indexOf(70));

let arregloA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Número de elementos en el arreglo A:", arregloA.length);

let arregloB = [];
console.log("Número de elementos en el arreglo B:", arregloB.length);

let arregloC = ["a", true, -1];
console.log("Número de elementos en el arreglo C:", arregloC.length);

let arregloD = [2, 4, 5, 7, 1, 34, 89, 0];
console.log("Número de elementos en el arreglo D:", arregloD.length);

let arregloPush = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arregloPush.push(345);
console.log(arregloPush);
arregloPush.push(true);
console.log(arregloPush);
arregloPush.push("ADSO");
console.log(arregloPush);
arregloPush.push(455, 78, false);
console.log(arregloPush);
arregloPush.push("ABcd", true, 21);
console.log(arregloPush);

let arreglo1 = [1, 2, false];
arreglo1.splice(2, 1);
console.log(arreglo1);
let arreglo2 = [99, false, 17, 45, 7, "abc", 78];
arreglo2.splice(6, 1);
console.log(arreglo2);
let arreglo3 = [-1, -55, -89, 30, 1000];
arreglo3.splice(1, 1);
console.log(arreglo3);
let arreglo4 = ["zxc", 767, 1298, true, false, [3], 1];
arreglo4.splice(1, 4);
console.log(arreglo4);
let arreglo5 = [34, ["q"], 67, 1, 99, 1 / 2];
arreglo5.splice(3, 2);
console.log(arreglo5);
let arreglo11 = ["x", "y", "z", 0, 1, 2, 3];
for (let i = 0; i < arreglo11.length; i++) {
    console.log(arreglo11[i]);
}

let numeros = [1, 17, 8, 9, 3];
for (let i = 0; i < numeros.length; i++) {
    let numeroAumentado = numeros[i] + 1;
    console.log(numeroAumentado);
}
function obtenerLongitudArreglo(arreglo) {
    return arreglo.length;
}
let numeros1 = [1, 2, 3, 4, 5];
let longitud = obtenerLongitudArreglo(numeros1);
console.log("Longitud del arreglo:", longitud);
function verificarLetraEnArreglo(letra) {
    let letras = ["a", "b", "c", "d", "e", "f", "g"];
    for (let i = 0; i < letras.length; i++) {
        if (letra === letras[i]) {
            console.log(
                "La letra",
                letra,
                "corresponde a un elemento del arreglo."
            );
            return;
        }
    }
    console.log(
        "La letra",
        letra,
        "no corresponde a ningún elemento del arreglo."
    );
}

verificarLetraEnArreglo("c");
verificarLetraEnArreglo("h");

let arreglo20 = [3, 50, 70, 600, 40];

arreglo20.forEach((elemento) => {
    console.log(elemento);
});

arreglo20.forEach((elemento) => {
    let resultado = elemento * 3;
    console.log(resultado);
});

let indice = 0;
while (indice < arreglo20.length) {
    console.log(arreglo20[indice]);
    indice++;
}

for (let i = 0; i < arreglo20.length; i++) {
    if (arreglo20[i] % 2 === 0) {
        console.log(arreglo20[i]);
    }
}

const nombres = ["Maria", "Pedro", "Juan", "Pablo", "Diana"];
let encontrado = false;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === "Juan") {
        encontrado = true;
        break;
    }
}

console.log(
    encontrado
        ? "Juan se encuentra en el arreglo"
        : "Juan no se encuentra en el arreglo"
);

let contadorMaria = 0;

for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === "Maria") {
        contadorMaria++;
    }
}

console.log(`El nombre Maria aparece ${contadorMaria} veces en el arreglo`);

const numeros2 = [15, 7, 9, 12, 1];
let suma = 0;

numeros2.forEach((numero) => {
    suma += numero;
});

console.log(`La suma de los elementos del arreglo es: ${suma}`);

const numeros11 = [-2, 8, 99, 1, 7];
let sumaCuadrados = 0;

numeros11.forEach((numero) => {
    sumaCuadrados += numero ** 2;
});

console.log(
    `La suma de los cuadrados de los elementos del arreglo es: ${sumaCuadrados}`
);

const valores = [true, true, false, true, false, false];
let contadorFalse = 0;
let i = 0;

while (i < valores.length) {
    if (valores[i] === false) {
        contadorFalse++;
    }
    i++;
}

console.log(`El valor false aparece ${contadorFalse} veces en el arreglo`);

const caracteres = ["z", "p", "s", "z", "o", "b", "a", "w", "d"];
let palabraFormada = true;

const palabraObjetivo = "adso";
for (let i = 0; i < palabraObjetivo.length; i++) {
    if (!caracteres.includes(palabraObjetivo[i])) {
        palabraFormada = false;
        break;
    }
}

console.log(
    palabraFormada
        ? "Es posible formar la palabra adso"
        : "No es posible formar la palabra adso"
);
for (let i = 10; i <= 20; i++) {
    const resultado = 5 * i;
    console.log(`5 x ${i} = ${resultado}`);
}
for (let i = 10; i <= 20; i++) {
    const resultado = 5 * i;
    console.log(`5 x ${i} = ${resultado}`);
}

const numeros20 = [5, 7, 90, 2, 5, 3, 8, 99];

numeros20.forEach((numeroA) => {
    numeros20.forEach((numeroB) => {
        if (numeroA + 1 === numeroB) {
            console.log(`${numeroA} y ${numeroB} son consecutivos`);
        }
    });
});

const arregloA1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arregloA1.length);
const arregloB1 = [];
console.log(arregloB1.length);
const arregloC1 = ["a", true, -1];
console.log(arregloC1.length);
const arregloD1 = [2, 4, 5, 7, 1, 34, 89, 0];
console.log(arregloD1.length);
const arregloR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arregloR.push(345);
console.log(arregloR);
arregloR.push(true);
console.log(arregloR);
arregloR.push("ADSO");
console.log(arregloR);
arregloR.push(455, 78, false);
console.log(arregloR);
arregloR.push("ABcd", true, 21);
console.log(arregloR);
const arregloA2 = [1, 2, false];
arregloA2.splice(2, 1);
console.log(arregloA2);
const arregloB2 = [99, false, 17, 45, 7, "abc", 78];
arregloB2.splice(6, 1);
console.log(arregloB2);
const arregloC2 = [-1, -55, -89, -30, 1000];
arregloC2.splice(1, 1);
console.log(arregloC2);
const arregloD2 = ["zxc", 767, 1298, true, false, [3], 1];
arregloD2.splice(1, 4);
console.log(arregloD2);
const arregloE2 = [34, ["q"], 67, 1, 99, 1 / 2];
arregloE2.splice(3, 2);
console.log(arregloE2);
const arregloA4 = [2, 6, 9, 0, 5];
const copiaArregloA4 = arregloA4.slice();
console.log(copiaArregloA4);
const arregloB4 = ["abc", 4, 88, 99];
const copiaArregloB4 = [...arregloB4];
console.log(copiaArregloB4);
const arreglo12 = ["x", "y", "z", 0, 1, 2, 3];

for (let i = 0; i < arreglo12.length; i++) {
    console.log(arreglo12[i]);
}
const arreglo13 = [1, 17, 8, 9, 3];
for (let i = 0; i < arreglo13.length; i++) {
    console.log(arreglo13[i] + 1);
}
function obtenerLongitudArreglo(arreglo) {
    return arreglo.length;
}
const miArregloS = [1, 2, 3, 4, 5];
console.log(obtenerLongitudArreglo(miArregloS));

function buscarLetraEnArreglo(letra) {
    const arreglo = ["a", "b", "c", "d", "e", "f", "g"];

    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === letra) {
            console.log(`La letra ${letra} se encuentra en el arreglo.`);
            return;
        }
    }

    console.log(`La letra ${letra} no se encuentra en el arreglo.`);
}
buscarLetraEnArreglo("c");
buscarLetraEnArreglo("z");
