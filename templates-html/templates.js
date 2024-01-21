document.addEventListener('DOMContentLoaded', (event) => {
    const cardsContainer = document.getElementById('cards-container');
    const template = document.getElementById('template-card').content;
    const fragment = document.createDocumentFragment();
    const cardsContent = [
            {
                title: 'Doggy',
                img: 'https://picsum.photos/id/0/5000/3333'
            },
            {
                title: 'Coffee Shop',
                img: 'https://picsum.photos/id/1/5000/3333'
            },
            {
                title: 'Mountain',
                img: 'https://picsum.photos/id/2/5000/3333'
            },
            {
                title: 'Morse',
                img: 'https://picsum.photos/id/3/5000/3333'
            },
            {
                title: 'Lighthouse',
                img: 'https://picsum.photos/id/4/5000/3333'
            }
        ];

        console.log(cardsContainer); // This should now log the container element

        cardsContent.forEach(card => {
            template.querySelector('img').setAttribute('src', card.img);
            template.querySelector('img').setAttribute('alt', card.title);
            template.querySelector('figcaption').textContent = card.title;
            let clone = document.importNode(template, true);
            fragment.appendChild(clone);
        });
    
        cardsContainer.appendChild(fragment);

});

