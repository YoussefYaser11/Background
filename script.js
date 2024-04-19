let allImg = document.querySelectorAll("img");
allImg.forEach((el) => {
    el.onmouseover = function(){
        document.body.style.backgroundImage = `url('${el.src}')`;
    }
})
