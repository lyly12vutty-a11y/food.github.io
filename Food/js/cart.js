// ===========================
// CART.JS - Shopping Cart Logic
// ===========================

// Add to Cart
function addToCart(foodId) {
    const food = foods.find(f => f.id === foodId);
    if (!food) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === foodId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: food.id,
            name: food.name,
            price: food.price,
            image: getImageUrl(food),
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show feedback
    showCartNotification();
}

// Show Cart Notification
function showCartNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        background: linear-gradient(135deg, #FF6B35, #F7931E);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 999;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = '✓ Added to cart!';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'fadeOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Display Cart Items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;

    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty"><p>Your cart is empty</p></div>';
        updateCartTotal();
        return;
    }

    cart.forEach(item => {
        const food = foods.find(f => f.id === item.id);
        const imageUrl = food ? getImageUrl(food) : item.image;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${imageUrl}" alt="${item.name}" class="cart-item-image" onerror="this.onerror=null;this.src='/images/placeholder.svg';">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="quantity-control">
                    <button onclick="decreaseQuantity(${item.id})">−</button>
                    <input type="number" value="${item.quantity}" readonly>
                    <button onclick="increaseQuantity(${item.id})">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    updateCartTotal();
}

// Increase Quantity
function increaseQuantity(foodId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === foodId);
    
    if (item) {
        item.quantity += 1;
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}

// Decrease Quantity
function decreaseQuantity(foodId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(item => item.id === foodId);
    
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            removeFromCart(foodId);
            return;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
        updateCartCount();
    }
}

// Remove from Cart
function removeFromCart(foodId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== foodId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
    updateCartCount();
}

// Update Cart Total
function updateCartTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const cartTotalElement = document.getElementById('cart-total');
    if (cartTotalElement) {
        cartTotalElement.textContent = total.toFixed(2);
    }
}

// Initialize cart display on page load
document.addEventListener('DOMContentLoaded', function() {
    displayCart();
});
