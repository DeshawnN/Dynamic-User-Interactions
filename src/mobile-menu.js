export function createSlideMenu(element) {
    const burgerButton = element.querySelector('.burger-button');
    const menu = element.querySelector('.slide-out');

    burgerButton.addEventListener('click', () => {
        menu.classList.toggle('visible');
        menu.classList.toggle('slide-in');
    });

    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('visible');
        menu.classList.remove('slide-in');
    })
}