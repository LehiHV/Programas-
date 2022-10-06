let obj = {}, obj3 = {};

for (let i = 1; i <= 10e3; i++) {
  let valor = Math.floor(Math.random() * 10e3);
  obj[valor] = valor;
}
let obj2 = Object.keys(obj)
console.table(obj2.sort((a, b) => b < a ? -1 : b > a ? -1 : 0))

for (i = 0; i < obj2.length; i++) {
  let name = "name:"
  obj3[name + obj2[i]] = name + obj2[i]
}

console.table(obj3)