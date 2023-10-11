const hContainer = document.querySelector('.h-container');

window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
        hContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
        hContainer.style.boxShadow = '0px 4px 20px rgba(0, 0, 0, 0.1)';
    }else{
        hContainer.style.backgroundColor = '';
        hContainer.style.boxShadow = '';
    }
})