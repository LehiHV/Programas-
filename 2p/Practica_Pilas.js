function pila(maximo) {
  this.Tamaño_Pila = []
  this.max = maximo
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
      enc = this.Tamaño_Pila[i]
    }
  }
  if (enc != "") {
    return "Se encontro el valor: " + x + " en la posicion: " + (enc + 1)
  } else {
    return "No se encontro el valor: " + x + ", Su posicion es -1"
  }
}

function peek() {
  return this.Tamaño_Pila[this.max - (this.max - 1)]
}

function ord_pila(x) {
  let p = new pila(x);
  let s = new pila(x);
  i = 1
  while (i == x) {
    n = Math.floor(Math.random() * (10 - 1 + 1))
    p.entrada(n)
    if (n < p.peek()) {
      p.salida()
      s.entrada(n)
    }
  }
  i++
  console.log(p.mostrar())
}
ord_pila(10)
console.log("Fin")

//p.peek() =x  2peek()=n
// if( p.peek()>n)
