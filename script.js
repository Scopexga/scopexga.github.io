// Main JavaScript File

// DOM Elements
let cart = JSON.parse(localStorage.getItem('anonymousCart')) || [];
let currentCategory = 'all';

// Game info for grid
const GAME_INFO = [
  { name: 'Free Fire', icon: '🔥', color: '#FF5722', currency: 'GMD', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.talkesport.com%2Fwp-content%2Fuploads%2Ffree-fire-free-diamonds.webp&f=1&nofb=1&ipt=03c996f9dcd500607f0a812743766322f11628f5b5347e432f592e2f73737cc4' },
  { name: 'PUBG', icon: '🎯', color: '#1A237E', currency: 'GMD', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.remNjIVR3O5GHqhJ1rLy_wHaEK%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=a6ecc7a2d45e244ec17c9ef92205c96ddf8decc1fc7459b39ab2bcd63bd6d247&ipo=images' },
  { name: 'Blood Strike', icon: '⚔️', color: '#C41C3B', currency: 'GMD', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.i6OTdLOFKePRIkq887VKQwAAAA%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=48f6994681094cb55093916e37f2b5c39584ebdd854577ed5904bc94c3ccd16b&ipo=images' },
  { name: 'Roblox', icon: '🧱', color: '#C41E3A', currency: 'GMD', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.amdqv3_Xqt-gKUYI_bdK8wAAAA%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=c09c72d61c6904b83de63794e14e2c16c5ed7436195b690a1bdd15af578d8132&ipo=images' },
  { name: 'Apple Gift Card', icon: '🍎', color: '#333333', currency: 'GMD', image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%2Fid%2FOIF.ZKiHN9HuFsGWJlQkQNKOog%3Fcb%3Ducfimg2%26pid%3DApi%26ucfimg%3D1&f=1&ipt=69d10a8ffd73b51d5f5f87c80925e64ac09e37a56defa91714445907b3276e96&ipo=images' },
];

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderGameGrid();
    setupEventListeners();
    updateCartCount();
    loadTrustFeatures();
}

function renderGameGrid() {
  const gameGrid = document.getElementById('gameGrid');
  gameGrid.innerHTML = '';
  GAME_INFO.forEach(game => {
    const item = document.createElement('div');
    item.className = 'game-grid-item';
    item.onclick = () => showGameProducts(game.name);
    item.innerHTML = `
      <div class="game-image">
        <img src="${game.image}" alt="${game.name} logo">
      </div>
      <div class="game-name">${game.name}</div>
      <div class="game-currency">${game.currency}</div>
    `;
    gameGrid.appendChild(item);
  });
}

function showGameProducts(gameName) {
  const products = PRODUCTS[gameName] || [];
  const gameTitle = document.getElementById('gameTitle');
  const productList = document.getElementById('productList');
  const gameGrid = document.getElementById('gameGrid');
  const productView = document.getElementById('productView');
  const gameInfo = GAME_INFO.find(g => g.name === gameName);
  
  gameTitle.innerHTML = `${gameName}`;
  productList.innerHTML = products.map(p => `
    <div class="product-card ${p.popular ? 'popular' : ''}">
      ${p.discount ? `<div class="product-badge">${p.discount}</div>` : ''}
      <div class="product-content">
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price">
          D${p.price}
          ${p.oldPrice ? `<span class="product-old-price">D${p.oldPrice}</span>` : ''}
        </div>
        ${p.perUnit ? `<div class="product-per-unit">${p.perUnit}</div>` : ''}
        <ul class="product-features">
          ${p.features.slice(0, 2).map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
        </ul>
        <div class="product-actions">
          <button class="add-to-cart" onclick="addToCart('${p.id}', this)">
            <i class="fas fa-cart-plus"></i> Add to Cart
          </button>
          <a href="https://wa.me/2206787259?text=Hi%20ANONY%20STORE,%20I%20want%20to%20order%20${encodeURIComponent(p.name)}%20for%20${gameName}" target="_blank" class="whatsapp-order">
            <i class="fab fa-whatsapp"></i> Order Now
          </a>
        </div>
      </div>
    </div>
  `).join('');
  
  gameGrid.style.display = 'none';
  productView.style.display = 'block';
}

function goBack() {
  const gameGrid = document.getElementById('gameGrid');
  const productView = document.getElementById('productView');
  gameGrid.style.display = 'grid';
  productView.style.display = 'none';
}

// Load products from products.js
function loadProducts() {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';
    
    const products = currentCategory === 'all' 
        ? getAllProducts()
        : PRODUCTS[currentCategory] || [];
    
    if (products.length === 0) {
        container.innerHTML = '<p class="no-products">No products found for this category.</p>';
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Create product card HTML
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product-card ${product.popular ? 'popular' : ''}`;
    
    card.innerHTML = `
        ${product.discount ? `<div class="product-badge">${product.discount}</div>` : ''}
        
        <div class="product-header">
            <h3 class="product-name">${product.name}</h3>
            <div class="product-category">
                <i class="fas fa-gamepad"></i> ${product.category}
            </div>
        </div>
        
        <div class="product-price">
            D${product.price}
            ${product.oldPrice ? `<span class="product-old-price">D${product.oldPrice}</span>` : ''}
        </div>
        
        ${product.perUnit ? `<div class="product-per-unit">${product.perUnit}</div>` : ''}
        
        <ul class="product-features">
            ${product.features.map(feature => `<li><i class="fas fa-check"></i> ${feature}</li>`).join('')}
        </ul>
        
        <div class="product-action">
            <button class="add-to-cart" onclick="addToCart('${product.id}')">
                <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Category filtering
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            loadProducts();
        });
    });
    
    // Chat widget
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
        chatButton.addEventListener('click', (e) => {
            // Add analytics tracking here
            console.log('Chat button clicked');
        });
    }
}

// Cart functionality
function addToCart(productId, buttonElement = null) {
    // Show loading state on button
    if (buttonElement) {
        buttonElement.disabled = true;
        buttonElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Adding...';
    }

    // Find product in all game categories
    let product = null;
    let gameName = null;

    for (const game in PRODUCTS) {
        const found = PRODUCTS[game].find(p => p.id === productId);
        if (found) {
            product = { ...found, category: game };
            gameName = game;
            break;
        }
    }

    if (!product) {
        if (buttonElement) {
            buttonElement.disabled = false;
            buttonElement.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
        }
        return;
    }

    // Check if already in cart
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();

    // Reset button state after a short delay
    setTimeout(() => {
        if (buttonElement) {
            buttonElement.disabled = false;
            buttonElement.innerHTML = '<i class="fas fa-cart-plus"></i> Add to Cart';
        }
    }, 1000);

    showNotification(`${product.name} added to cart!`, 'success');
}

function saveCart() {
    localStorage.setItem('anonymousCart', JSON.stringify(cart));
}

function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    // Update cart count display if exists
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = totalItems;
    }
}

// OTP Generation (for WhatsApp verification)
function generateOTP() {
    // Generate a secure 4-digit OTP
    const otp = Math.floor(1000 + Math.random() * 9000);
    return otp.toString();
}

// Build WhatsApp order message
function buildOrderMessage(orderData) {
    const { customer, items, total, orderId } = orderData;
    
    let message = `🛒 NEW ORDER - ANONYMOUS GAMING\n`;
    message += `══════════════════════════════════════════════════════════\n\n`;
    
    message += `📋 ORDER #${orderId}\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `• Date: ${new Date().toLocaleString()}\n`;
    message += `• Total: D${total} GMD\n\n`;
    
    message += `👤 CUSTOMER\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `• Name: ${customer.firstName} ${customer.lastName}\n`;
    message += `• WhatsApp: ${customer.phone}\n`;
    if (customer.email) message += `• Email: ${customer.email}\n`;
    message += `\n`;
    
    message += `🛍️ ITEMS\n`;
    message += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    items.forEach((item, index) => {
        message += `${index + 1}. ${item.name} (${item.category})\n`;
        message += `   Quantity: ${item.quantity}\n`;
        message += `   Price: D${item.price} × ${item.quantity} = D${item.price * item.quantity}\n\n`;
    });
    
    message += `💰 TOTAL: D${total} GMD\n\n`;
    message += `🔔 Order received via ANONYMOUS GAMING Website`;
    
    return message;
}

// Notification system
function showNotification(message, type = 'success') {
    // Remove existing notification
    const existing = document.querySelector('.notification-toast');
    if (existing) existing.remove();
    
    const toast = document.createElement('div');
    toast.className = `notification-toast ${type}`;
    toast.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 4000);
}

// Load trust features from config
function loadTrustFeatures() {
    const trustFeatures = CONFIG.trustFeatures;
    // Implement feature display logic here
}

// Utility function to format currency
function formatCurrency(amount) {
    return `D${amount}`;
}

// Export for testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        generateOTP,
        buildOrderMessage,
        formatCurrency
    };
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
.notification-toast {
    position: fixed;
    top: 30px;
    right: 30px;
    background: var(--card);
    border-left: 4px solid var(--success);
    border-radius: 10px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: var(--shadow);
    z-index: 9999;
    animation: slideIn 0.3s ease;
    max-width: 400px;
}

.notification-toast.error {
    border-left-color: var(--error);
}

.notification-toast.warning {
    border-left-color: var(--warning);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
}

.notification-toast i {
    font-size: 1.2rem;
}

.notification-toast.success i {
    color: var(--success);
}

.notification-toast.error i {
    color: var(--error);
}

.notification-toast.warning i {
    color: var(--warning);
}

.notification-toast button {
    background: none;
    border: none;
    color: var(--gray);
    cursor: pointer;
    font-size: 1rem;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .notification-toast {
        top: 20px;
        right: 20px;
        left: 20px;
        max-width: none;
    }
}
`;

// Cart modal functions
function showCart() {
    updateCartDisplay();
    document.getElementById('cartModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideCart() {
    document.getElementById('cartModal').style.display = 'none';
    document.body.style.overflow = '';
}

function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: var(--gray); padding: 40px 0;">Your cart is empty</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>${item.category}</p>
            </div>
            <div class="cart-item-controls">
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                </div>
                <div class="cart-item-price">D${item.price * item.quantity}</div>
            </div>
        `;
        cartItems.appendChild(itemElement);
    });
}

function updateQuantity(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    saveCart();
    updateCartCount();
    updateCartDisplay();
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'warning');
        return;
    }

    const orderText = cart.map(item => 
        `${item.name} (${item.category}) x${item.quantity} - D${item.price * item.quantity}`
    ).join('%0A');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const whatsappUrl = `https://wa.me/2206787259?text=Hi%20ANONY%20STORE,%20I%20want%20to%20order:%0A${orderText}%0ATotal:%20D${total}`;

    window.open(whatsappUrl, '_blank');
    hideCart();
}

document.head.appendChild(notificationStyles);