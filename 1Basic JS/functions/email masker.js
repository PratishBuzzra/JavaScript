function maskEmail(email){
    return email.replace(email.slice(1,email.indexOf('@') - 1), '*'.repeat(email.slice(1,email.indexOf('@') - 1).length))
  }
  let email = "apple.pie@example.com";
  console.log(maskEmail(email));
  email = "freecodecamp@example.com";
  console.log(maskEmail(email));
  email = "pratishbuzzra123@gmail.com";
  console.log(maskEmail(email));
  