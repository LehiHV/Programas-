
//
// imports ES5
// Node5es (data)
//

export default function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
}

export function getHead() {
  return this.head
}

export function prepend(n) {//new node
  n.next = this.head
  this.head = n
  this.size++
}

export function append(n) {//new node
  n.next = null//
  this.tail.next = n
  this.tail = n
  this.size++
}

export function traverse() {
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
export function contains(v) {
  let c = this.head
  let enc = "";
  while (c) {//exists
    if (v == c.data) {
      enc = c.data
    }
    c = c.next
  }
  if (enc == v) {
    console.log(enc)
  } else {
    console.log("no encotrado")
  }
}
export function getTail() {
  let c = this.head
  var t = ""
  while (c) {
    t = c.data
    c = c.next
  }
  return t
}