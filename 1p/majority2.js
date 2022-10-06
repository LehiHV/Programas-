let a = [], x, c2 = 0, c3 = 0, c = 1, p = 0;


function aleatorio(a) {
  a.length = x;
  for (j = 0; j <= x - 1; j++) {
    a[j] = Math.floor(Math.random() * ((x - 1) - 1 + 1) + 1);
    //generar los 5 grupos de numeros aleatorios
  }
  console.log(a);//mostrar array desordenado
}

function repeticiones_Optimizado(x) {
  aleatorio(a);
  aux = Math.floor(a.length / 2)
  a.sort()
  console.log(a)

  do {
    for (i = 0; i < a.length; i++) {
      if (a[i] == a[i + 1]) {
        c++
        c2 = c
        c3 = a[i]
      } else {
        c = 1
        if (c2 > c) {
          p = c2
        }
      }
    }
  } while (p < c2)

  if (c2 > aux) {
    console.log("El numero: " + c3 + " se repite: " + c2 + " veces");
  }
  else {
    console.log("Ninguno numero se repite mas veces que otro")
  }

}

repeticiones_Optimizado(x = 5);