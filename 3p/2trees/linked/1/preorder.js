function preorder(n) {
  if (n) {
    console.log(n.d)
    preorder(n.r)
    preorder(n.l)
  }
}