document.addEventListener("contextmenu",(e) => {
    e.preventDefault();
})
const div1 = document.getElementById('div1');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');

let timer = null;
div1.addEventListener('mouseenter', () => {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    text1.style.opacity = '0';
    timer = setTimeout(() => {
        text2.style.opacity = '1';
        timer = null;
    }, 400);
});

div1.addEventListener('mouseleave', () => {
    if (timer) {
        clearTimeout(timer);
        timer = null;
    }
    text2.style.opacity = '0';
    timer = setTimeout(() => {
        text1.style.opacity = '1';
        timer = null;
    }, 400);
});