  let a, b, c, d;
  
  function primos(a) {
    b = 0
    while (a > 0) {
      b = b + 1
      c = 1
      d = 0
      while (c <= b) {
        if (b % c == 0) {
          d++
        }
        c++
      }
      if (d == 2) {
        console.log(b)
        a--
      }
    }
  }
  a = 11
  primos(a)