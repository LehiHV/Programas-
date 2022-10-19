/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Using a array-based stack implementation
 * method search
 *
 */

function pila() {
  this.Tamaño_Pila = []
  this.max = 5
  this.llena = llena
  this.vacia = vacia
  this.entrada = entrada
  this.salida = salida
  this.mostrar = mostrar
  this.busqueda = busqueda
  this.peek = peek
}
function entrada(element) {
  if (this.llena()) {
    console.log("Tu pila esta llena, debes eliminar elementos")
  } else {
    this.Tamaño_Pila.unshift(element)
  }
}

function salida() {
  if (this.vacia()) {
    console.log("Tu pila esta vacia, debes introducit elementos")
  }
  else {
    this.Tamaño_Pila.shift()
  }
}

function llena() {
  if (this.Tamaño_Pila.length === this.max)
    return true
  else
    return false
}

function vacia() {
  if (this.Tamaño_Pila.length === 0)
    return true
  else
    return false
}

function mostrar() {
  let show = ""
  for (let i = 0; i < this.Tamaño_Pila.length; ++i) {
    show += this.Tamaño_Pila[i] + "\n"
  }
  return show
}

function busqueda(x) {
  let enc;
  for (let i = 0; i < this.Tamaño_Pila.length; i++) {
    if (this.Tamaño_Pila[i] == x) {
      enc = i
    }
  }
  if (enc >= 0) {
    return "Se encontro el valor: " + x + " en la posicion: " + (enc)
  } else {
    return "No se encontro el valor: " + x + ", Su posicion es -1"
  }
}


function peek() {
  return this.Tamaño_Pila[this.Tamaño_Pila.length - this.Tamaño_Pila.length]
}

let prueba = new pila();

prueba.entrada(1)
prueba.entrada(4)
prueba.entrada(5)
console.log(prueba.mostrar())
console.log(prueba.busqueda(2))