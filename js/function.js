
// Banner Scripts
let banner = document.getElementById('banner');
let bannerTitle = document.getElementById('bannerTitle');
let bannerDesignation = document.getElementById('bannerDesignation');

window.addEventListener('scroll' , function(){
    let value = window.scrollY;
    bannerTitle.style.paddingRight = 50 - value + 'px';
    bannerTitle.style.transition = '1.5s';
    bannerTitle.style.opacity = 1 - value;

    bannerDesignation.style.paddingLeft = 50 - value + 'px';
    bannerDesignation.style.transition = '1.5s';
    bannerDesignation.style.opacity = 1 - value;
})