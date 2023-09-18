//Función flecha
let funcionFlecha = () =>{
    console.log ('Esto es desde una función flecha')
    return 'Flecha';
}

//Llamar función flecha
//funcionFlecha();

//Recuperar dato de la función
let recupeDato = funcionFlecha();
console.log (recupeDato);

//Imprimir directamente el valor de la función
// console.log (funcionFlecha());

console.log('Esto es una ' + recupeDato);

//Cambio de la función flecha gracias a ser let
funcionFlecha = () =>{
    console.log('Esto es una prueba');
}

funcionFlecha();