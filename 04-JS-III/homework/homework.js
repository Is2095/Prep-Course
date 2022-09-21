// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (n = 0; array.length >= n; n++){
    if (Math.ceil(array[n]) === array[n]){
    array[n]= array[n] + 1;
    }
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 array.push(elemento);
 return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var concatenadas = palabras[0];
  for (n = 1; palabras.length > n; n++){
      concatenadas = concatenadas + ' ' + palabras[n];
  }
  return concatenadas;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
 for (n=0; array.length > n; n++){
  if (array[n] === elemento){
    return true;
  }
 } return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var valor = 0;
  for (n=0; numeros.length >= n; n++){
    if (Math.ceil(numeros[n]) === numeros[n]){
      var valor = valor + numeros[n];
    }  
  } return valor;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  var numero = 0;
  var promedio = 0;
  for (n = 0; resultadosTest.length >= n; n++){
    if (Math.ceil(resultadosTest[n]) === resultadosTest[n]){
      var suma = suma + resultadosTest[n];
      var numero = numero + 1;
    } 
  }
  var promedio = suma / numero;
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masgrande = numeros[numeros.length - 1];
  for (n = 0; numeros.length - 1 > n; n++){
    if (Math.ceil(numeros[n]) === numeros[n]){
      if (masgrande <= numeros[n])
        var masgrande = numeros[n];
    }
  }
  return masgrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var producto = 1;
  if (arguments.length === 0){
    return 0;
  }else if(arguments.length === 1){
    return arguments[0];
  }else {
    for (n=0; arguments.length > n; n++){
      var producto = producto * arguments[n];
    }
  }
  return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var cantidad = 0;
  for (n = 0; arreglo.length > n; n++){
    if (arreglo[n] > 18){
      var cantidad = cantidad + 1;
    }
  }
  return cantidad;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí 
  //var semana = ['domingo ','lunes ','martes ','miércoles ','jueves ','viernes ','sábado '];
      if (numeroDeDia === 1 || numeroDeDia === 7){
      return 'Es fin de semana';
    } else return  'Es dia Laboral';
    
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var numero = n.toString();
  if (numero.charAt(0) === '9'){
    return true;
  }else return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí 
  var elemento = arreglo[0]; 
  for (n=1; arreglo.length > n; n++){
      if (elemento !== arreglo[n]){
        return false;
      }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arraymeses =[];
  var cuenta = 0;
  for (n=0; array.length > n; n++){
    if (array[n] === 'Enero'){
      var cuenta = cuenta + 1;
      arraymeses.push('Enero'); 
    }else if (array[n] === 'Marzo'){
      var cuenta = cuenta + 1;
      arraymeses.push('Marzo');
    } else if (array[n] === 'Noviembre'){
      var cuenta = cuenta + 1;
      arraymeses.push('Noviembre');
    }
  }
  if (cuenta === 3){    
    return arraymeses;
  } else return 'No se encontraron los meses pedidos';
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arraymasdecien =[];
  for (n=0; array.length > n; n++){
    if (array[n] > 100){
      arraymasdecien.push(array[n]);
    }
  }
  return arraymasdecien;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for (n=0; n<10; n++){
    suma = suma + 2;
    if(n === suma){
      break ;      
      } else 
        array.push(suma); 
  }
  if (n < 10){
    return  'Se interrumpió la ejecución';
  } else 
    return array;  
  }

function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for (n=0; n<10; n++){
    if(n !== 5){
      suma = suma + 2;
      array.push(suma);
    } else {
        continue;
    }  
    }
         return array;  
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
