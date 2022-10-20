
//
// imports ES5
// Node5es (data)
//

export default function Linked(n) {//node
  this.head = n//node
  this.tail = n//node
  this.size = 1
  this.prev = ""

  this.getHead = getHead
  this.prepend = prepend
  this.append = append
  this.traverse = traverse
  this.contains = contains
  this.getTail = getTail
  this.InsertAfter=InsertAfter
  this.InsertBefore=InsertBefore
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
  let enc = false;
  while (c) {//exists
    if (v == c.data) {
      enc=true
    }
    c = c.next
  }
  return enc
  
}
function getTail() {
  let c = this.head
  var t = ""
  while (c) {
    t = c.data
    c = c.next
  }
  return t
}

function InsertAfter(v,o){
  let c = this.head
  let aux;
  while (c) {//exists
    if (v == c.data) {
      aux=c.next
      c.next=o
      o.next=aux
    }
    c = c.next
  }
}
function InsertBefore(v,o){
  let c = this.head
  let aux,prev
    if(c.next==null){
      this.prepend(o)
    }else{
      while (c) {//exists
      if (v != c.data && c.next!=null) {
        prev=c.next;
      }
      c = c.next
    }
    }
  while (c) {
    console.log(prev)
    c=c.next
  }
}
