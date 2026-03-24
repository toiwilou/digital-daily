const logoTrans = document.querySelector('.logo-trans');
const logoWhite = document.querySelector('.logo-white');
const dropdown = document.querySelector('.dropdown');
const header = document.querySelector('#header-app');
const contact = document.querySelector('.contact');
const bars = document.querySelector('.fa-bars');
const items = document.querySelector('.items');

const headerOnScroll = () => {
    if (window.scrollY > 0) {
        logoTrans.classList.add('none');
        logoWhite.classList.remove('none');
        header.classList.add('bg-white');
        header.classList.add('shadow-sm');
        items.classList.remove('items-trans');
        items.classList.add('items-white');
        contact.classList.remove('contact-trans');
        contact.classList.add('contact-white');
    } else {
        logoTrans.classList.remove('none');
        logoWhite.classList.add('none');
        header.classList.remove('bg-white');
        header.classList.remove('shadow-sm');
        items.classList.add('items-trans');
        items.classList.remove('items-white');
        contact.classList.add('contact-trans');
        contact.classList.remove('contact-white');
    }
};

headerOnScroll();
window.addEventListener('scroll', () => {
    dropdown.classList.add('none');
    headerOnScroll();
});

bars.addEventListener('click', () => {
    if (dropdown.classList.contains('none')) {
        dropdown.classList.remove('none');
    } else {
        dropdown.classList.add('none');
    }
});

window.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !bars.contains(e.target)) {
        dropdown.classList.add('none');
    }
});
