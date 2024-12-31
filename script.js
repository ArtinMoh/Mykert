const cIR1img1 = document.getElementById('cIR1img1');
cIR1img1.addEventListener('mouseenter', () => {
    cIR1img1.style.scale=('1.70');
    cIR1img1.style.paddingLeft='220px';
});
cIR1img1.addEventListener('mouseleave', () => {
    cIR1img1.style.scale=('1.6');
    cIR1img2.style.paddingLeft='236px';
});
const cIR1img2 = document.getElementById('cIR1img2');
cIR1img2.addEventListener('mouseenter', () => {
    cIR1img2.style.scale=('1.70');
    cIR1img2.style.paddingLeft='220px';
});
cIR1img2.addEventListener('mouseleave', () => {
    cIR1img2.style.scale=('1.6');
    cIR1img2.style.paddingLeft='236px';
});
const csocialmediaimg = document.getElementById('csocialmediaimg');
csocialmediaimg.addEventListener('mouseenter', () => {
    csocialmediaimg.style.scale=('3.65');
    csocialmediaimg.style.paddingLeft='91px';
});
csocialmediaimg.addEventListener('mouseleave', () => {
    csocialmediaimg.style.scale=('3.5');
    csocialmediaimg.style.paddingLeft='91px';
});
const cactiongamesimg = document.getElementById('cactiongamesimg');
cactiongamesimg.addEventListener('mouseenter', () => {
    cactiongamesimg.style.scale=('3.65');
    cactiongamesimg.style.paddingLeft='67.5px';
});
cactiongamesimg.addEventListener('mouseleave', () => {
    cactiongamesimg.style.scale=('3.5');
    cactiongamesimg.style.paddingLeft='67.5px';
});
const cIR2img2 = document.getElementById('cIR2img2');
cIR2img2.addEventListener('mouseenter', () => {
    cIR2img2.style.scale=('1.70');
});
cIR2img2.addEventListener('mouseleave', () => {
    cIR2img2.style.scale=('1.6');
});
const cIR2img3 = document.getElementById('cIR2img3');
cIR2img3.addEventListener('mouseenter', () => {
    cIR2img3.style.scale=('1.70');
});
cIR2img3.addEventListener('mouseleave', () => {
    cIR2img3.style.scale=('1.6');
});




window.addEventListener('scroll', function() {
    const target = document.getElementById('PageLogo');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 200) {
        target.classList.add('visible'); // visible
    } else {
        target.classList.remove('visible'); // Hide it again if needed
    }
});

window.addEventListener('scroll', function() {
    const targetM = document.getElementById('DownloadbtnMobile');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 400) {
        targetM.classList.add('visible'); // visible
        targetM.classList.remove('hidden');
    } else {
        targetM.classList.remove('visible'); // Hide it again if needed
        targetM.classList.add('hidden');
    }
});

window.addEventListener('scroll', function() {
    const target = document.getElementById('categoriesItemsRow3');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 1600) {
        target.classList.add('visible'); // visible
    } 
    // else {
    //     target.classList.remove('visible'); // Hide it again if needed
    // }
});


window.addEventListener('scroll', function() {
    const targetp = document.getElementById('targetp');
    const scrollPosition = window.scrollY;

    if (scrollPosition >= 2226) {
        targetp.style.visibility='visible'; // visible
    } 
     else {
        targetp.style.visibility='hidden'; // Hide it again if needed
     }
});