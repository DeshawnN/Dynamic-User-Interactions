export function createCarousel(element) {
    const carousel = document.querySelector('.carousel');
    const previousButton = element.querySelector('.previous');
    const slides = carousel.querySelectorAll('.slide').length;

    createRadioButtons(slides);

    previousButton.addEventListener('click', previous);

    const nextButton = element.querySelector('.next');
    nextButton.addEventListener('click', next);

    setInterval(next, 5000);
}

function previous() {
    const slide = document.querySelector('.slide');
    const slides = document.querySelectorAll('.slide').length;
    let marginRight = +slide.style.marginRight.replace("%", '');
    marginRight += 100;

    if (marginRight > 0) {
        marginRight = -(slides * 100) + 100;
    }

    slide.style.marginRight = `${marginRight}%`;
    setRadio(marginRight);
}

function next() {
    const slide = document.querySelector('.slide');
    const slides = document.querySelectorAll('.slide').length;
    let marginRight = +slide.style.marginRight.replace("%", '');
    marginRight -= 100;

    if (marginRight < -(slides * 100) + 100) {
        marginRight = 0;
    }

    slide.style.marginRight = `${marginRight}%`;
    setRadio(marginRight);
    
}

function createRadioButtons() {
    const radioContainer = document.querySelector('.radio-buttons');
    const slides = document.querySelectorAll('.slide').length;
    
    for (let i = 0; i < slides; i++) {
        const slide = document.querySelector('.slide');
        const radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'slide');
        radioContainer.appendChild(radio);

        radio.addEventListener('click', () => {
            const margin = i * 100;
            slide.style.marginRight = `-${margin}%`
        })
    }
    radioContainer.children[0].checked = true;
}

function setRadio(margin) {
    const radioButtons = document.querySelector('.radio-buttons');
    const index = Math.abs((margin * -1) / 100);

    radioButtons.children[index].checked = true;
}