

function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
      return `${year} is a leap year.`;
    } else {
      return `${year} is not a leap year.`;
    }
  }
  
  let result = isLeapYear(1900);
  console.log(result);
  result = isLeapYear(2024);
  console.log(result);
  result = isLeapYear(2028);
  console.log(result);
  result = isLeapYear(2200);
  console.log(result);
  
  