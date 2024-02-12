document.addEventListener('DOMContentLoaded', function () {

    const savedCards = JSON.parse(localStorage.getItem('cards')) || [];


    function saveCards(cards) {
        localStorage.setItem('cards', JSON.stringify(cards));
    }


    function deleteCard(cardElement) {
        const cardId = cardElement.dataset.id;
        const updatedCards = savedCards.filter(card => card.id !== cardId);
        saveCards(updatedCards);
        cardElement.remove();
    }


    const closeIcons = document.querySelectorAll('.close');
    closeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            const card = icon.closest('.card-1');
            deleteCard(card);
        });
    });


    function renderCards() {
        savedCards.forEach(card => {
            const cardElement = document.createElement('div');
            cardElement.classList.add('card-1');
            cardElement.dataset.id = card.id;


        });
    }


    renderCards();
});


