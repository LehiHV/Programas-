function fibonacci_rec(x) {
  if (x == 1) {
    return 1
  
  }
  return fibonacci_rec(x - 1) + fibonacci_rec(x - 2)
  for(var i=0;<x;i++ ){
    console.log(fibonacci_rec(i))
  }
}
fibonacci_rec(5)