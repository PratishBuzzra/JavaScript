const favoriteIcon = document.querySelectorAll('.favorite-icon');
function clickHeart(){
    if(this.classList.contains('filled')){
        this.classList.remove('filled');
        this.innerHTML = "&#9825;";
    }else{
        this.classList.add('filled');
        this.innerHTML = "&#10084;";
    }
}



favoriteIcon.forEach((icon)=>{
    icon.addEventListener('click', clickHeart)
})