var copyText = document.querySelector('.copyText')
var btnCopy = document.querySelectorAll('.btnCopy')
var btnCopyCode = document.querySelector('.btnCopyCode')
var pre = document.getElementsByTagName('pre')
var arr = Array.from(pre)
var btnArr = Array.from(btnCopy)
var copy_greet = document.querySelector('.copy_greet')
btnArr.forEach((item,index) => {
    item.addEventListener('click', () => {
        for (let i = 0; i < arr.length; i++) {
            navigator.clipboard.writeText(arr[index].textContent)
            copy_greet.style.transform = "translateY(0%)"
            setTimeout(() => {
                copy_greet.style.transform = "translateY(150%)"
            }, 1200);
        }
    })
})

btnCopyCode.addEventListener('click', () => {
    navigator.clipboard.writeText(copyText.textContent)
    copy_greet.style.transform = "translateY(0%)"
            setTimeout(() => {
                copy_greet.style.transform = "translateY(150%)"
            }, 1200);
})

window.onscroll = function() {
    myFunction()
}
var menu__bar = document.querySelector(".menu__bar")
var lazyScrollUp = document.querySelector('.down-to-top')
var sidebar = document.querySelector('.main__container--sidebar')
var main = document.querySelector('.main')
function myFunction() {
    var navbar = document.querySelector('.nav')
    
    
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('active-nav')
        sidebar.classList.add('sidebar-active')
        main.classList.add('active-main')
        lazyScrollUp.style.display = "block"

    } else {
        navbar.classList.remove('active-nav')
        sidebar.classList.remove('sidebar-active')
        main.classList.remove('active-main')
        lazyScrollUp.style.display = "none"
        
    }
}
menu__bar.addEventListener('click', () => {
    if(sidebar.style.display === "none") {
        sidebar.style.display = "block"
    } else { 
        sidebar.style.display = "none"   
    } 
})
if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    sidebar.classList.add('sidebar-active')
    main.classList.add('active-main')
}    
lazyScrollUp.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
var docs__wrapper = document.querySelector('.docs__wrapper')
if(!navigator.onLine) {
    document.querySelector('.docs__wrapper').style.display = "none"
document.body.innerHTML += 
`<div class="offline__image">
    <img width="500px" src="../assets/5363928.jpg" alt="" />
    NO INTERNET
</div>`
console.log('offline')

} else {
    document.querySelector('.docs__wrapper').style.display = "block"
    console.log('online')
}

