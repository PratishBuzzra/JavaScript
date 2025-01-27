function pyramid(str,count,inverted){
    let rows = [];
      function padRows(rowNumber, rowCount){
        return " ".repeat(rowCount - rowNumber) + str.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
      }
      for(let i = 1; i<=count;i++){
      if(inverted){
        rows.unshift(padRows(i, count));
      }else{
        rows.push(padRows(i, count))
      }
      }
    return rows;
    }
    pyramid("o", 4, false); 
    pyramid("p", 5, true); 
    let result = "";
    
    result += pyramid("o", 4, false).join("\n") + "\n\n"; 
    result += pyramid("p", 5, true).join("\n"); 
    console.log(result);
    