const serviceItems = document.getElementsByClassName('service-item');

for (let i = 0; i < serviceItems.length; i++) {
    const item = serviceItems[i];

    item.addEventListener('mouseenter', () => {
        item.classList.remove('shadow-sm');
        item.classList.add('shadow');
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('shadow');
        item.classList.add('shadow-sm');
    });
}
