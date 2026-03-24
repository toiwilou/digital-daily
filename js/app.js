const barDropdown = document.querySelector('.dropdown');
const commande = document.getElementById('commande');

const itemsNav = [
    'logo-header',
    'home',
    'products',
    'service',
    'portfolio',
    'contact-header',
    'mb-home',
    'mb-products',
    'mb-service',
    'mb-portfolio',
    'mb-contact',
    'contact-web',
    'contact-mobile',
    'last-app',
    'app-custom',
    'learn-more',
    'erp-transport',
    'contact-erp-transport',
    'logo-footer',
    'contact-footer'
];

const itemsPages = {
    'home': 'DIGITAL Daily',
    'products': 'Nos produits',
    'erp-transport': 'ERP-TRANSPORT',
    'service': 'Nos services',
    'portfolio': 'PORTFOLIO',
};

const lisNav = [
    'mb-home',
    'mb-products',
    'mb-service',
    'mb-portfolio',
    'mb-contact'
];

const currentPage = sessionStorage.getItem('page');

const setPage = (itemPage) => {
    for (const page in itemsPages) {
        const pageElt = document.getElementById(page + '-app');

        if (itemPage == page) {
            pageElt.classList.remove('none');
            document.title = itemsPages[page];
            sessionStorage.setItem('page', itemPage);
        } else {
            if (!pageElt.classList.contains('none')) {
                pageElt.classList.add('none');
            }
        }
    }
};

if (currentPage) {
    setPage(currentPage);
}

for (let i = 0; i < itemsNav.length; i++) {
    const item = itemsNav[i];
    const itemElt = document.querySelector('.' + item + '-cls');
    
    itemElt.addEventListener('click', () => {
        setPage(itemElt.dataset.link);
        
        if (!barDropdown.classList.contains('none')) {
            barDropdown.classList.add('none');
        }

        if (item.indexOf('contact') !== -1) {
            commande.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

setTimeout(() => {
    document.getElementById('loader').style.display = 'none';
    document.getElementById('content').style.display = 'block';
}, 800);
