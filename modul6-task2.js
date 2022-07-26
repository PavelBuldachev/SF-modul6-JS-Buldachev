/* Задание 6-2 */
let num = 17;
function isSimple(num) {
  if(num >= 1000) {
    return "Данные неверны"
  }
  for(let i = 2; i < 1000; i++){
    if(num % i === 0) {
      return "Непростое число"
    }
    else return "Простое число"
  }
}
console.log(isSimple(num));