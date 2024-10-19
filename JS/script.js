let cartItems = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productItem = button.closest('.product-item');
        const productName = productItem.querySelector('.product-name').textContent;
        const productPrice = productItem.querySelector('.product-price').textContent;
        const productImage = productItem.querySelector('.product-img').src;

        const cartItem = {
            name: productName,
            price: productPrice,
            img: productImage
        };

        addToCart(cartItem);
    });
});

function addToCart(item) {
    cartItems.push(item);
    displayCartItems();
}
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';



    cartItems.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="cart-item-img" width="50">
            <span>${item.name} - ${item.price}</span>
            <button class="remove-btn">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemDiv);


        const removeBtn = cartItemDiv.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function () {
            cartItems = cartItems.filter(cartItem => cartItem.name !== item.name);
            displayCartItems();
        });

        removeBtn.style.backgroundColor = '#ff4d4d';
        removeBtn.style.color = '#fff';
        removeBtn.style.border = 'none';
        removeBtn.style.padding = '5px 10px';
        removeBtn.style.cursor = 'pointer';
    });
}
