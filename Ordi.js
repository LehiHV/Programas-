function Dado(x) {
  for (let i = 1; i <= x; i++) {
    let d = Math.floor(Math.random() * (6 - 1) + 1);
    console.log("Valor del dado: " + d)
  }
}
function Moneda(x) {
  let i = 1;
  do {
    let d = Math.floor(Math.random() * (1 - 0 + 1) + 0);
    if (d == 1) {
      console.log("Verdadero")
    } else {
      console.log("Falso")
    }
    i++
  } while (x >= i)
}

Dado(6)
Moneda(2)