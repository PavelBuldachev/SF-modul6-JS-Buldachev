/* Задание 6-3 */
function func1(Num1) {
    function func2(Num2) {
        return Num1 + Num2;
    }
    return func2(7);
  }
  const result = func1(4);
  console.log(result);