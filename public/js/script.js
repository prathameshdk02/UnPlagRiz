// Code regarding the Menu button - For mobile views...
const navHeader = document.querySelector('.nav-header');
const hamBtn = document.querySelector('.mobile-btn[name="ham"]');
const closeBtn = document.querySelector('.mobile-btn[name="close"]');

const listToggler = () =>{
    navHeader.classList.toggle("mobile");
}

hamBtn.addEventListener('click',listToggler);
closeBtn.addEventListener('click',listToggler);
