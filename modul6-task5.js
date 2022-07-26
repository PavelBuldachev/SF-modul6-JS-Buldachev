/* Задание 6-5 */
const x = 2;
const n = 16;
const multiply = (x, n) => {
  let result = x;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(multiply(x, n));