const adressbtn = document.querySelector('#adress-form')
const adressclose = document.querySelector('#adress-close')

adressbtn.addEventListener("click", function(){
    document.querySelector('.adress-form'). style.display = "flex"
})
/*  */
adressclose.addEventListener("click", function(){
    document.querySelector('.adress-form'). style.display = "none"
})
/* -----slider--------- */
/* const rightbnt = document.querySelector('.fa-chevron-right')
rightbnt.addEventListener ("click", function(){
    document.querySelector(".slider-content-left-top").style.right = "100%"
})  */