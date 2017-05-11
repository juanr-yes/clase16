/**var mensaje = "Bienvenidos a mi sitio web"
var edad = 21
var escuela = "Academia DesafioLatam"
var estaCansado = true*/

/**
 * Comentario
 * de 
 * multiples
 * lineas
 */

// Comentario de una sola linea

// console.log(mensaje, edad, escuela, estaCansado)

/**
 * Ciclos o loops:
 * 
 * FOR
 * WHILE
 * DO WHILE
 * FOR IN
 * 
 */

// FOR
/**for (var i = 0; i < 10; i++) {
  console.log(i)
}*/

//while (primero compara, despues ejecuta)
/**var i = 0
while (i < 10) {
  console.log(i)
  i++
}*/

//do while (primero ejecuta, despues compara)
/**var i = 0
do {
  console.log(i)
  i+
} while (i < 10)*/

// break, continue (break detiene, continue salta)
/**for (var i = 0; i < 10; i++) {
  if (i == 5) {
    break
  }
  console.log(i)
}*/

var a = Number(prompt ("Inserte el numero A"))
var b = Number(prompt ("Inserte el numero B"))
var c = Number(prompt ("Inserte el numero C"))

console.log(a)
console.log(b)
console.log(c)

if (a > b && a > c) {
  if (b > c) {
    console.log (a + " es el numero mayor y " + c + " es el numero menor")
  } else {
    console.log (a + " es el numero mayor y " + b + " es el numero menor")
  }
}

if (b > a && b > c) {
  if (a > c) {
    console.log (b + " es el numero mayor y " + c + " es el numero menor")
  } else {
    console.log (b + " es el numero mayor y " + a + " es el numero menor")
  }
}

if (c > a && c > b) {
  if (a > b) {
    console.log (c + " es el numero mayor y " + b + " es el numero menor")
  } else {
    console.log (c + " es el numero mayor y " + a + " es el numero menor")
  }
}

