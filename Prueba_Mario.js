var stack = [];

for (i = 0; i <= 10; i++) {
  stack[i] = Math.floor(Math.random() * (10 - 1) + 1)
}
console.log(stack)
function sortStack(s) {
  if (s.length > 0) {
    var t = s.pop();
    sortStack(s);
    sortedInsert(s, t);
  }
}

function sortedInsert(s, e) {
  if (s.length == 0 || e > s[s.length - 1]) {
    s.push(e);
  } else {
    var x = s.pop();
    sortedInsert(s, e);
    s.push(x);
  }
}

sortStack(stack);

console.log(stack);