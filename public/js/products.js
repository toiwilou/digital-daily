const productItems = document.getElementsByClassName('product-item');

for (let i = 0; i < productItems.length; i++) {
    const item = productItems[i];

    item.addEventListener('mouseenter', () => {
        item.classList.remove('shadow-sm');
        item.classList.add('shadow');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('shadow');
        item.classList.add('shadow-sm');
    });
}
