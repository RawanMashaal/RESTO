const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');
const btnpopup = document.querySelector('.btnLogin-popup');


registerLink.onclick =() => {
    wrapper.classList.add('active');
};

loginLink.onclick =() => {
    wrapper.classList.remove('active');
};
btnpopup.onclick =() => {
    wrapper.classList.add('active-popup');
};