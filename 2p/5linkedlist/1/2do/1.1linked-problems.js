/** INSTRUCTIONS
 *
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of a char, number, or object
 * @returns {bool} - true or false, if value v exists or not,
 * may use traverse
 *
 * @example
 * contains(3)
 *
 * PROBLEM 2
 * getTail()
 *
 * retrieve the node at the tail
 * @returns {Node} - Node at the tail or null if the list is empty
 *
 * @example
 * getTail()
 *
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
import Linked from '../../5/linked5es.js'
function obj(data) {//constructor
  this.data = data
  this.next = null
}
let n1 = new obj('a')
let n2 = new obj('b')

let l = new Linked(n1)
l.prepend(n2)
l.append(new obj('c'))
l.prepend(new obj('d'))
l.traverse(l.getHead())
//probar el contain
l.contains('a')
l.contains('z')
//Obtener la cola
console.log(l.getTail())