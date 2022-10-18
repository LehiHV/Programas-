//
// imports ES5
// Node5es (data)
//

function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  //this.contains = contains
}

function getHead() {
  return this.head
}

function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

function traverse() {
  let c = this.head
  while (c) {//exists
    //console.log(c.key)
    console.log(c.data)
    c = c.next
  }
  console.log('\n')
}

//
// exercises
//
function contains(v) {
  let c = this.head
  let enc;
  while (c) {//exists
    if (v === c.next) {
      enc = c.data
    }
    c = c.next
  }
  if (enc != "") {
    return enc
  } else {
    return "no encotrado"
  }
}
function getTail() { }