let num;
function factorialCalculator(number){
  num = number;
  let result = 1;
  for(let i=1;i<=num;i++){
    result = result * i;
  }
  return result;
}
let factorial = factorialCalculator(5);

let resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)
factorial = factorialCalculator(4);
resultMsg = `Factorial of ${num} is ${factorial}`
console.log(resultMsg)