
let bttonAddcart = document.querySelectorAll('.add-cart');
bttonAddcart.forEach(button => {
    button.addEventListener('click', function() {
        addingCart(button.closest('.cart-item')) 
    })
})

function addingCart(card) {
    const cardImg = card.querySelector('.card-img');
    const cardName = card.querySelector('.card-name').innerHTML;
    const cardPrice = card.querySelector('.card-price').innerHTML;

    const cardItem = {
        img: cardImg.src, 
        name: cardName,
        price: cardPrice
    }
    addtocart(cardItem)
}
let cartItems = [];

function addtocart(card) {
    const divCards = document.getElementById('last-div');
    let existingItem = cartItems.find(item => item.name === card.name);

    if (existingItem) {

        existingItem.quantity++;
        updateCartDisplay(existingItem);
    } else {

        const cardItem = document.createElement('div');
        cardItem.dataset.name = card.name; 
        cardItem.innerHTML = `
            <img src="${card.img}" class="img-fluid w-25">
            <span>${card.name}</span> <br>
            <span>Price: ${card.price}</span>
            <span class="quantity">Quantity: 1</span>
            <button class="increment-btn btn btn-light">+</button>
            <button class="decrement-btn btn btn-light">-</button>
            <button class="remove-btn btn btn-danger">Remove</button>
        `;
        divCards.appendChild(cardItem);

        const incrementBtn = cardItem.querySelector('.increment-btn');
        incrementBtn.addEventListener('click', function() {
            const currentItem = cartItems.find(item => item.name === card.name);
            currentItem.quantity++;
            currentItem.quantity += 5
            updateCartDisplay(currentItem);
        });

        const decrementBtn = cardItem.querySelector('.decrement-btn');
        decrementBtn.addEventListener('click', function() {
            const currentItem = cartItems.find(item => item.name === card.name);
            if (currentItem.quantity > 1) {
                currentItem.quantity--;
                
                updateCartDisplay(currentItem);
            }
        });

        const removeBtn = cardItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function() {
            cardItem.remove(); 
            cartItems = cartItems.filter(item => item.name !== card.name);
        });

        cartItems.push({ name: card.name, price: card.price, quantity: 1 });
    }
}

function updateCartDisplay(item) {
    const cartItem = document.querySelector(`[data-name="${item.name}"]`);
    const quantitySpan = cartItem.querySelector('.quantity');
    const totalPriceSpan = cartItem.querySelector('.total-price');
    quantitySpan.innerHTML = `Quantity: ${item.quantity}`;
    totalPriceSpan.innerHTML = `Total: ${item.price * item.quantity}`;
}
    