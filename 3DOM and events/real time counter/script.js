const inputText = document.getElementById('input-text');
const count = document.getElementById('counts');

function countChar(){
    let countValue = inputText.value.length;
count.innerHTML = `Character Count: ${countValue}/50`;
if(countValue>=50){
    count.style.color = 'red';
      
    
}else{
    count.style.color = 'black';
}
}
inputText.addEventListener('input', countChar);
