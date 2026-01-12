const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-Popup');
conts iconclose = document.queryselector('.icon-close); 
                                         
registerLink.addEventListener('click', ()=> {
        wrapper.classList.add('active');
    });

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=>{
    wrapper.classList.add('active-Popup');

});

iconClose.addEventListener('click', ()=>{
        wrapper.classList.add('active-Popup');
