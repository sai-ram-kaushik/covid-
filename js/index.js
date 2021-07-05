const header = document.querySelector('.header');
window.onscroll = function(){
    var top = window.scrollY;
    console.log(top);
    if(top>=200){
        header.classList.add('black');
    }
    else{
        header.classList.remove('black')
    }
}