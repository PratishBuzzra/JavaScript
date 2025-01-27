const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
function generatePassword(lengthOfPara){
  let result = ""
  
for(let i=0; i<lengthOfPara;i++){
  const randomIndex = Math.floor(Math.random() * str.length);
  result += str[randomIndex];
}
return result;
}
let password = generatePassword(8);
console.log(`Generated password:${password}`);
password = generatePassword(6)
console.log(`Generated password:${password}`);