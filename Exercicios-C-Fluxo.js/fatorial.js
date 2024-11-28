function fatorialN(n) {
  let num = 1;
  let i = 1;
  while(i <= n) {
      num *= i;
      i++;
  }
  return num;
}
console.log(fatorialN(4))