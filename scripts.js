/* scripts.js */

let cart = [];

function addToCart(productName, productPrice) {
    const item = cart.find(item => item.name === productName);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.textContent = `${item.name} - $${item.price} x ${item.quantity} = $${itemTotal.toFixed(2)}`;
        cartItems.appendChild(cartItem);
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

function filterCategory(category) {
    const products = document.querySelectorAll('.product');
    products.forEach(product => {
        if (category === 'all' || product.dataset.genre === category || product.dataset.releaseDate === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
}

function sortProducts(order) {
    const productsGrid = document.querySelector('.products-grid');
    const products = Array.from(productsGrid.children);

    products.sort((a, b) => {
        const dateA = parseInt(a.dataset.releaseDate, 10);
        const dateB = parseInt(b.dataset.releaseDate, 10);

        if (order === 'release-date-asc') {
            return dateA - dateB;
        } else if (order === 'release-date-desc') {
            return dateB - dateA;
        }
    });

    products.forEach(product => productsGrid.appendChild(product));
}
