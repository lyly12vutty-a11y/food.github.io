// ===========================
// SEARCH.JS - Search Functionality
// ===========================

// Search Input Event Listener
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            performSearch(searchTerm);
        });

        // Clear search on focus if it's a placeholder
        searchInput.addEventListener('focus', function() {
            if (this.value === this.placeholder) {
                this.value = '';
            }
        });
    }
});

// Perform Search
function performSearch(searchTerm) {
    let filteredFoods;

    if (searchTerm === '') {
        // If search is empty, show all foods or featured foods
        const foodsGrid = document.getElementById('foods-grid');
        if (foodsGrid) {
            filteredFoods = foods;
        } else {
            // On home page, show featured
            displayFeaturedFoods();
            return;
        }
    } else {
        // Filter foods by search term
        filteredFoods = foods.filter(food => {
            return food.name.toLowerCase().includes(searchTerm) ||
                   food.description.toLowerCase().includes(searchTerm) ||
                   food.category.toLowerCase().includes(searchTerm);
        });
    }

    // Display filtered results
    displayFoods(filteredFoods);

    // Setup scroll reveal for new items
    setupScrollReveal();
}

// Advanced Search Function (for future enhancements)
function advancedSearch(filters) {
    let results = foods;

    if (filters.category && filters.category !== 'all') {
        results = results.filter(food => food.category === filters.category);
    }

    if (filters.minPrice !== undefined) {
        results = results.filter(food => food.price >= filters.minPrice);
    }

    if (filters.maxPrice !== undefined) {
        results = results.filter(food => food.price <= filters.maxPrice);
    }

    if (filters.minRating !== undefined) {
        results = results.filter(food => food.rating >= filters.minRating);
    }

    if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        results = results.filter(food => 
            food.name.toLowerCase().includes(term) ||
            food.description.toLowerCase().includes(term)
        );
    }

    return results;
}

// Highlight search results
function highlightSearchResults(results) {
    const foodsGrid = document.getElementById('foods-grid');
    if (!foodsGrid) return;

    const cards = foodsGrid.querySelectorAll('.food-card');
    cards.forEach(card => {
        card.style.opacity = '0.3';
    });

    results.forEach(result => {
        const resultCard = foodsGrid.querySelector(`[data-food-id="${result.id}"]`);
        if (resultCard) {
            resultCard.style.opacity = '1';
        }
    });
}

// Get search suggestions
function getSearchSuggestions(searchTerm) {
    const term = searchTerm.toLowerCase();
    return foods.filter(food =>
        food.name.toLowerCase().startsWith(term) ||
        food.category.toLowerCase().startsWith(term)
    ).slice(0, 5);
}

// Display Search Statistics
function displaySearchStats(results, searchTerm) {
    console.log(`Search for "${searchTerm}" found ${results.length} results`);
    return results.length;
}
