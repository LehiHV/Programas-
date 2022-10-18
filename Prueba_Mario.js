function ord_fila(x) {
  let p = new fila(x);
  let s = new fila(x);
  let n, r;
  let i = 1;
  n = Math.floor(Math.random() * (x - 1) + 1)
  p.entrada(n)
  while (i < x) {
    if (p.vacia() && s.vacia()) {
      return p.entrada(r)
    }
    while (!p.vacia()) {
      s.entrada(p.salida())
    }
    while (r > s.peek()) {
      p.entrada(s.salida())
    }
    if (s.vacia()) {
      p.entrada(r)
    }
    if (r <= s.peek()) {
      p.entrada(r)

    }
    while (!s.vacia()) {
      p.entrada(s.salida())
    }
    console.log(p.Tamaño_Fila)
    console.log(s.Tamaño_Fila)
  }
}