// ===========================
// APP.JS - Main Application Logic
// ===========================

// Food Data with images from Unsplash and Pixabay
const foods = [
    {
        id: 1,
        name: 'Burger',
        category: 'fast-food',
        description: 'Juicy beef burger with lettuce, tomato, and special sauce',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop',
        rating: 4.5
    },
    {
        id: 2,
        name: 'Pizza Margherita',
        category: 'fast-food',
        description: 'Classic pizza with fresh mozzarella, basil, and tomato sauce',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?w=400&h=300&fit=crop',
        rating: 4.8
    },
    {
        id: 3,
        name: 'Fried Chicken',
        category: 'fast-food',
        description: 'Crispy golden fried chicken with herbs and spices',
        price: 11.99,
        image: 'https://images.unsplash.com/photo-1626082965579-2c0f99cad644?w=400&h=300&fit=crop',
        rating: 4.6
    },
    {
        id: 4,
        name: 'Sushi Roll',
        category: 'asian',
        description: 'Assorted sushi with fresh fish, rice, and seaweed',
        price: 14.99,
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop',
        rating: 4.7
    },
    {
        id: 5,
        name: 'Ramen',
        category: 'asian',
        description: 'Hot noodle soup with tender chicken and vegetables',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1623521885457-c41b3a7ff32f?w=400&h=300&fit=crop',
        rating: 4.9
    },
    {
        id: 6,
        name: 'Pad Thai',
        category: 'asian',
        description: 'Stir-fried rice noodles with shrimp, peanuts, and lime',
        price: 12.99,
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop',
        rating: 4.6
    },
    {
        id: 7,
        name: 'Steak',
        category: 'fast-food',
        description: 'Premium grilled steak with garlic butter and herbs',
        price: 19.99,
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
        rating: 4.9
    },
    {
        id: 8,
        name: 'Noodles Bowl',
        category: 'asian',
        description: 'Delicious egg noodles with vegetables and sauce',
        price: 10.99,
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop',
        rating: 4.5
    },
    {
        id: 9,
        name: 'Pasta Carbonara',
        category: 'fast-food',
        description: 'Creamy pasta with bacon, eggs, and parmesan cheese',
        price: 13.99,
        image: 'https://images.unsplash.com/photo-1612874742237-415c69db1dba?w=400&h=300&fit=crop',
        rating: 4.7
    },
    {
        id: 10,
        name: 'Salad Bowl',
        category: 'healthy',
        description: 'Fresh mixed greens with vegetables and light dressing',
        price: 9.99,
        image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
        rating: 4.4
    },
    {
        id: 11,
        name: 'Coffee',
        category: 'drinks',
        description: 'Hot aromatic coffee brewed from premium beans',
        price: 4.99,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f4?w=400&h=300&fit=crop',
        rating: 4.8
    },
    {
        id: 12,
        name: 'Bubble Tea',
        category: 'drinks',
        description: 'Refreshing bubble tea with tapioca pearls',
        price: 5.99,
        image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e90?w=400&h=300&fit=crop',
        rating: 4.6
    },
    {
        id: 13,
        name: 'Ice Cream',
        category: 'dessert',
        description: 'Creamy ice cream in various flavors',
        price: 6.99,
        image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=300&fit=crop',
        rating: 4.7
    },
    {
        id: 14,
        name: 'Chocolate Cake',
        category: 'dessert',
        description: 'Rich chocolate cake with frosting and sprinkles',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
        rating: 4.8
    },
    {
        id: 15,
        name: 'Healthy Smoothie',
        category: 'healthy',
        description: 'Nutritious blend of fruits, yogurt, and honey',
        price: 7.99,
        image: 'https://images.unsplash.com/photo-1553530666-ba2a8e36cd12?w=400&h=300&fit=crop',
        rating: 4.5
    },
    {
        id: 16,
        name: 'Grilled Fish',
        category: 'healthy',
        description: 'Fresh grilled fish with lemon and herbs',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1580822261290-991b38693d1b?w=400&h=300&fit=crop',
        rating: 4.9
    }
];

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    displayFoods(foods);
    setupEventListeners();
    updateCartCount();
    setupScrollReveal();
    loadThemePreference();
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when link clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger?.classList.remove('active');
            navMenu?.classList.remove('active');
        });
    });

    // Cart Icon Click
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', function(e) {
            e.preventDefault();
            openCart();
        });
    }

    // Close Cart Button
    const closeCartBtn = document.querySelector('.close-cart');
    if (closeCartBtn) {
        closeCartBtn.addEventListener('click', closeCart);
    }

    // Cart Modal Click Outside
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeCart();
            }
        });
    }

    // Category Filter Buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter;
            filterFoodsByCategory(filter);
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        });

        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Checkout Button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            alert('Thank you for your order! Order confirmed.');
            localStorage.removeItem('cart');
            closeCart();
            displayCart();
            updateCartCount();
        });
    }

    // Clear Cart Button
    const clearCartBtn = document.getElementById('clear-cart-btn');
    if (clearCartBtn) {
        clearCartBtn.addEventListener('click', function() {
            if (confirm('Are you sure you want to clear your cart?')) {
                localStorage.removeItem('cart');
                displayCart();
                updateCartCount();
            }
        });
    }
}

// Display Foods
function displayFoods(foodsToDisplay) {
    const foodsGrid = document.getElementById('foods-grid');
    if (!foodsGrid) return;

    foodsGrid.innerHTML = '';

    if (foodsToDisplay.length === 0) {
        foodsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 40px;">No foods found</p>';
        return;
    }

    foodsToDisplay.forEach(food => {
        const foodCard = createFoodCard(food);
        foodsGrid.appendChild(foodCard);
    });
}

// Create Food Card
function createFoodCard(food) {
    const card = document.createElement('div');
    card.className = 'food-card scroll-reveal';
    card.innerHTML = `
        <img src="${food.image}" alt="${food.name}" class="food-image" onerror="this.src='https://via.placeholder.com/400x300?text=${food.name}'">
        <div class="food-info">
            <div class="food-category">${food.category.replace('-', ' ')}</div>
            <h3 class="food-name">${food.name}</h3>
            <p class="food-description">${food.description}</p>
            <div class="food-footer">
                <div>
                    <div class="food-price">$${food.price.toFixed(2)}</div>
                    <div class="food-rating">⭐ ${food.rating}</div>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${food.id})">Add to Cart</button>
        </div>
    `;
    return card;
}

// Filter Foods by Category
function filterFoodsByCategory(category) {
    let filteredFoods;
    if (category === 'all') {
        filteredFoods = foods;
    } else {
        filteredFoods = foods.filter(food => food.category === category);
    }
    displayFoods(filteredFoods);
}

// Dark/Light Theme Toggle
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
    }
}

function loadThemePreference() {
    const theme = localStorage.getItem('theme') || 'light';
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon();
}

// Scroll Reveal Animation
function setupScrollReveal() {
    const reveals = document.querySelectorAll('.scroll-reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// Display Featured Foods on Home Page
function displayFeaturedFoods() {
    const featuredGrid = document.getElementById('featured-foods');
    if (!featuredGrid) return;

    const featuredFoods = foods.slice(0, 6);
    featuredGrid.innerHTML = '';

    featuredFoods.forEach(food => {
        const foodCard = createFoodCard(food);
        featuredGrid.appendChild(foodCard);
    });
}

// Open Cart Modal
function openCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.add('show');
        displayCart();
    }
}

// Close Cart Modal
function closeCart() {
    const cartModal = document.getElementById('cart-modal');
    if (cartModal) {
        cartModal.classList.remove('show');
    }
}

// Update cart count in navigation
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Load featured foods when page loads
window.addEventListener('load', function() {
    displayFeaturedFoods();
    setupScrollReveal();
});
