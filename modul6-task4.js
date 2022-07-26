/* Задание 6-4 */
const countdown = function (a, b) {
    timer = setInterval(function () {
        if (a >= b) {
            console.log(a)
            a--;
        } else {
            clearInterval(timer)
        }
    }, 1000);
  }
  countdown(10, 0);
