
//  Hambuger

const open = document.getElementById('normal');
const close = document.getElementById('close');
const navBar = document.querySelector('.nav');

open.addEventListener('click', () => {
    navBar.style.left = 0
    open.style.display = 'none'
    close.style.display = 'block'
});

close.addEventListener('click', () => {
    navBar.style.left = '-100%';
    close.style.display = 'none';
    open.style.display = 'block';
});

// css change
const dark = document.getElementById('dark');

const light = document.getElementById('light');

const cssLink = document.getElementById('Light_mode');

light.addEventListener('click', () => {
    cssLink.href = 'style.css'
    close.click();
})
dark.addEventListener('click', () => {
    cssLink.href = 'Dark-mode.css'
    dark.style.css = 'none'
    light.style.css = 'block'

    close.click();
})