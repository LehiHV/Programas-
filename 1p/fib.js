let a, b = 0, c = 1, d;

function fibonacci(a) {
  for (let i = 1; i <= a; i++) {
    console.log(b)
    d = b + c;// 1,2,3,5,8,13
    b = c; //1,1,2,3,5,8
    c = d; //1,2,3,5,8,13
  }
}
a = 11
fibonacci(a)