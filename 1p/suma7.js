//imprime la sumatoria de los múltiplos de 7 en el rango [200-300]

let a, b, i;
a = 0;
for (i = 200; i <= 300; i++) {
  if (i % 7 == 0) {
    a = i + a;
  }
}
console.log("La suma de todos los multiplos del 200-300 es de: " + a);