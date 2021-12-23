export function createDropdown(element, eventType) {
    const lis = [...element.querySelectorAll('.navbar > ul > li')];

    for (const li of lis) {
        const dropdown = li.querySelector('.dropdown');
        if (!dropdown) continue;
        
        li.addEventListener('mouseenter', () => {
            dropdown.classList.toggle('visible');
        });

        li.addEventListener('mouseleave', () => {
            dropdown.classList.toggle('visible');
        });
        
    }
}