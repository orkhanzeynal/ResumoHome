const btn = document.querySelector('.fa-toggle-off');
const navI = document.querySelector('.navigation');
const mainP = document.querySelector('.mainP');
const bodyP = document.querySelector('body');

const menu = () => {
    bodyP.style.opacity = '.5';
    mainP.style.background = '#333';
    btn.attributes[0].value = 'fa-toggle-on';
    navI.style.color = '#fff';
    navI.style.position = 'absolute';
    navI.style.transition = '1s';
    navI.style.right = '5px';
    if (navI.style.display = 'none') {
        navI.style.display = 'block';

    } else {
        navI.style.display = 'none';
    }

}
btn.addEventListener('click', menu);