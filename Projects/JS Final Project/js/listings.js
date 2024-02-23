document.addEventListener('DOMContentLoaded', function () {
    // Get the element you need.
    let section = document.querySelector('.hotel-cards');

    // Global variable to store card data
    let cardsData = [
        {
            imgUrl: `images/card-1.jpeg`,
            id: `1`,
            name: `Cozy 5 Star Apartment`,
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
            currency: `$`,
            price: `$899/night`,
            location: {
                city: `Barcelona`,
                country: `Spain`
            }
        },
        {
            imgUrl: `images/card-2.jpeg`,
            id: `2`,
            name: `Office Studio`,
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
            currency: `$`,
            price: `$1.119/night`,
            location: {
                city: `London`,
                country: `UK`
            }
        },
        {
            imgUrl: `images/card-3.jpeg`,
            id: `3`,
            name: `Beautiful Castle`,
            description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci praesentium eligendi, deserunt quasi exercitationem, nam sunt quis iure quod voluptate deleniti obcaecati tempore facere blanditiis suscipit. Provident error. `,
            currency: `$`,
            price: `$459/night`,
            location: {
                city: `Milan`,
                country: `Italy`
            }
        }
    ];

    // Check if there is any data already stored in local storage
    let storedCardsData = JSON.parse(localStorage.getItem('cardsData'));

    // If no data is found, set the initial cardsData and store it in local storage
    if (!storedCardsData || storedCardsData == ``) {
        localStorage.setItem('cardsData', JSON.stringify(cardsData));
        storedCardsData = JSON.parse(localStorage.getItem('cardsData'));
    }

    storedCardsData.forEach(card => {
        // Create a new <div> for the card
        let cardDiv = document.createElement('div');
        cardDiv.classList.add('card-1');
        cardDiv.classList.add('card');

        // Populate the card div with the properties of the card object
        cardDiv.innerHTML = `
        <div class="hotel-content">
            <div class="cards-hover">
                <img src="${card.imgUrl}" alt="hotel-picture">
                <div class="card-icons">
                    <span class="material-icons track" title="View">art_track</span>
                    <span class="material-icons edit" title="Edit">edit</span>
                    <span class="material-icons close" title="Close">close</span>
                </div>
            </div>
            <span class="hotel-title">${card.name}</span>
            <span class="hotel-description">${card.description}</span>
        </div>
        <div class="hotel-footer">
            <div class="hotel-price">${card.price}</div>
            <div class="hotel-location">
                <p class="city"><span class="material-icons"></span>${card.location.city}, <span class="country">${card.location.country}</span></p>
            </div>
        </div>
        `;

        // Append the card div to the section
        section.appendChild(cardDiv);
    });

    // Add event listeners for dynamically added elements
    section.addEventListener('click', function (event) {
        let target = event.target;
        if (target.classList.contains('edit')) {
            // Handle edit functionality
            // Get the card element
            let card = target.closest('.card');
            // Find the corresponding data object based on the card's ID
            let cardId = card.id;
            let cardDataIndex = storedCardsData.findIndex(data => data.id === cardId);
            // Get the elements inside the card for editing
            let nameElement = card.querySelector('.hotel-title');
            let descriptionElement = card.querySelector('.hotel-description');
            let priceElement = card.querySelector('.hotel-price');
            let cityElement = card.querySelector('.city');
            let countryElement = card.querySelector('.country');

        } else if (target.classList.contains('close')) {

            let card = target.closest('.card');
            let cardId = card.id;

            card.remove();
            let indexToDelete = storedCardsData.findIndex(data => data.id === cardId);
            // If the object with the matching ID is found, remove it from the array
            if (indexToDelete !== -1) {
                storedCardsData.splice(indexToDelete, 1);
                // Update local storage
                localStorage.setItem('cardsData', JSON.stringify(storedCardsData));
            }
        }
    });
});
