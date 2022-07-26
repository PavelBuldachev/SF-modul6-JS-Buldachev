/* Задание 6-1 */
let arr = [null, 47, 71, 741, 174, "44", 77, 44, 0, 0];
function getAmountNum() {
let even = 0;
let odd = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++) {
  if(arr[i] === 0 ) {
    zero += 1;
  } else if (typeof (arr[i]) !== "number") {
    console.log(`${arr[i]} -  не число`);
  } else if (arr[i] % 2 === 0) {
    even += 1;
  } else {
    odd += 1;
  }
}
console.log(`${zero} - нулей`);
console.log(`${even} - чётных чисел`);
console.log(`${odd} - нечётных чисел`);
}
getAmountNum();