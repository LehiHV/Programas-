let obj = {};

for (let i = 1; i <= 10e3; i++) {
  let name = 'Name:' + Math.floor(Math.random() * 10e3);
  obj[name] = name;
}
console.table(obj)