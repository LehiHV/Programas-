  //imprime la multiplicatoria de los múltiplos de 7 en el rango [200-300]
  
  let a, b, i;
  a = 1;
  for (i = 200; i <= 300; i++) {
    if (i % 7 == 0) {
      a = i * a;
    }
  }
  console.log("El resultado de multiplicar todos los multiplos de 7 del 200 al 300 es: " + a);