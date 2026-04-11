import React, { useState } from 'react';

const App = () => {
  // State for cart item count
  const [cartCount, setCartCount] = useState(0);

  // Sample product data for the online store
  const products = [
    { id: 1, name: "Summer Breeze Dress", price: 49.99, image: "https://picsum.photos/id/20/300/200" },
    { id: 2, name: "Urban Denim Jacket", price: 79.99, image: "https://picsum.photos/id/21/300/200" },
    { id: 3, name: "Cozy Knit Sweater", price: 59.99, image: "https://picsum.photos/id/22/300/200" },
    { id: 4, name: "Evening Glam Heels", price: 89.99, image: "https://picsum.photos/id/23/300/200" },
    { id: 5, name: "Sleek Backpack", price: 39.99, image: "https://picsum.photos/id/24/300/200" },
    { id: 6, name: "Sunset Joggers", price: 44.99, image: "https://picsum.photos/id/25/300/200" },
    { id: 7, name: "Silk Scarf Set", price: 29.99, image: "https://picsum.photos/id/26/300/200" },
    { id: 8, name: "Leather Chelsea Boots", price: 119.99, image: "https://picsum.photos/id/27/300/200" },
  ];

  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
    // Optional: Add a subtle haptic / visual feedback could go here
  };

  return (
    <div className="store-container">
      {/* Inline styles for the custom design system */}
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, sans-serif;
            overflow-x: hidden;
          }

          /* Pink & Blue Gradient Background */
          .store-container {
            position: relative;
            min-height: 100vh;
            background: linear-gradient(135deg, #FFB6C1 0%, #FF69B4 40%, #7B68EE 70%, #3B82F6 100%);
            background-attachment: fixed;
            overflow-x: hidden;
          }

          /* Circular blurry center - fixed in the middle of the viewport */
          .blur-circle {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 520px;
            height: 520px;
            background: radial-gradient(circle, rgba(255, 220, 240, 0.65), rgba(160, 180, 255, 0.45));
            filter: blur(72px);
            border-radius: 50%;
            z-index: 0;
            pointer-events: none;
            opacity: 0.9;
            box-shadow: 0 0 80px rgba(255, 105, 180, 0.5);
          }

          /* Second subtle blur circle for extra dreamy effect */
          .blur-circle-secondary {
            position: fixed;
            top: 30%;
            left: 70%;
            transform: translate(-50%, -50%);
            width: 380px;
            height: 380px;
            background: rgba(255, 182, 193, 0.5);
            filter: blur(65px);
            border-radius: 50%;
            z-index: 0;
            pointer-events: none;
          }

          /* Content layer sits above blur circles */
          .content {
            position: relative;
            z-index: 10;
            max-width: 1280px;
            margin: 0 auto;
            padding: 1.5rem 2rem 4rem;
          }

          /* Header styles */
          .store-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
            backdrop-filter: blur(8px);
            background: rgba(255, 255, 255, 0.15);
            padding: 0.8rem 2rem;
            border-radius: 80px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.05);
          }

          .logo h1 {
            font-size: 1.8rem;
            font-weight: 800;
            background: linear-gradient(120deg, #fff, #ffe0f0);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            letter-spacing: -0.5px;
            text-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }

          .cart-icon {
            background: rgba(255,255,245,0.9);
            padding: 8px 18px;
            border-radius: 40px;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 1.1rem;
            backdrop-filter: blur(4px);
            color: #c72a6f;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }

          .cart-count {
            background: #ff4d8c;
            color: white;
            border-radius: 30px;
            padding: 2px 10px;
            font-size: 0.9rem;
            margin-left: 4px;
          }

          /* Pink Nav Buttons */
          .nav-buttons {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.2rem;
            margin: 2rem 0 2.5rem;
          }

          .pink-nav-btn {
            background: #ff69b4;
            border: none;
            padding: 12px 28px;
            font-size: 1rem;
            font-weight: 600;
            border-radius: 60px;
            color: white;
            cursor: pointer;
            transition: all 0.25s ease;
            box-shadow: 0 8px 18px rgba(255, 105, 180, 0.3);
            backdrop-filter: blur(2px);
            letter-spacing: 0.5px;
          }

          .pink-nav-btn:hover {
            background: #ff3388;
            transform: translateY(-3px);
            box-shadow: 0 12px 24px rgba(255, 51, 136, 0.4);
          }

          .pink-nav-btn:active {
            transform: translateY(2px);
          }

          /* Hero tagline area */
          .hero-text {
            text-align: center;
            margin: 2rem 0 1rem;
          }
          .hero-text h2 {
            font-size: 2.8rem;
            font-weight: 800;
            color: white;
            text-shadow: 0 4px 12px rgba(0,0,0,0.2);
            letter-spacing: -0.02em;
          }
          .hero-text p {
            font-size: 1.2rem;
            color: #fff8f0;
            font-weight: 500;
            margin-top: 8px;
            backdrop-filter: blur(4px);
            display: inline-block;
            padding: 0 12px;
          }

          /* Product Grid */
          .products-section {
            margin-top: 2rem;
          }
          .section-title {
            font-size: 2rem;
            font-weight: 700;
            color: white;
            margin-bottom: 2rem;
            text-align: center;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 2rem;
          }

          .product-card {
            background: rgba(255, 255, 255, 0.92);
            backdrop-filter: blur(2px);
            border-radius: 32px;
            overflow: hidden;
            transition: all 0.3s ease;
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
            cursor: default;
          }

          .product-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 24px 36px rgba(0, 0, 0, 0.15);
            background: white;
          }

          .product-image {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.4s ease;
          }
          .product-card:hover .product-image {
            transform: scale(1.02);
          }

          .product-info {
            padding: 1.2rem 1rem 1.4rem;
            text-align: center;
          }
          .product-name {
            font-size: 1.2rem;
            font-weight: 700;
            color: #1e1e2f;
            margin-bottom: 0.4rem;
          }
          .product-price {
            font-size: 1.3rem;
            font-weight: 800;
            color: #ff4d8c;
            margin: 0.5rem 0;
          }
          .add-to-cart-btn {
            background: #ff69b4;
            border: none;
            padding: 10px 20px;
            border-radius: 40px;
            font-weight: 600;
            color: white;
            width: 80%;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 0.9rem;
            margin-top: 6px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }
          .add-to-cart-btn:hover {
            background: #e0559e;
            transform: scale(0.97);
          }

          /* footer / extra stuff */
          .store-footer {
            margin-top: 4rem;
            text-align: center;
            padding: 2rem 1rem 1rem;
            border-top: 1px solid rgba(255,255,240,0.3);
            color: #fff3e6;
            font-weight: 500;
          }

          @media (max-width: 700px) {
            .content {
              padding: 1rem 1rem 2rem;
            }
            .hero-text h2 {
              font-size: 2rem;
            }
            .pink-nav-btn {
              padding: 8px 18px;
              font-size: 0.85rem;
            }
            .blur-circle {
              width: 350px;
              height: 350px;
              filter: blur(60px);
            }
            .store-header {
              padding: 0.5rem 1.2rem;
            }
            .logo h1 {
              font-size: 1.4rem;
            }
          }
        `}
      </style>

      {/* Background blurry circular elements */}
      <div className="blur-circle"></div>
      <div className="blur-circle-secondary"></div>

      {/* Main content */}
      <div className="content">
        {/* Header with logo and cart */}
        <header className="store-header">
          <div className="logo">
            <h1>🌸 BLUSH & BLUE</h1>
          </div>
          <div className="cart-icon">
            🛍️ Cart
            <span className="cart-count">{cartCount}</span>
          </div>
        </header>

        {/* Hero section */}
        <div className="hero-text">
          <h2>Chic Finds, Dreamy Styles</h2>
          <p>✨ Pink vibes & blue horizons ✨</p>
        </div>

        {/* Pink Nav Buttons (below hero, above products) */}
        <div className="nav-buttons">
          <button className="pink-nav-btn">🏠 Home</button>
          <button className="pink-nav-btn">👗 New Arrivals</button>
          <button className="pink-nav-btn">🔥 Trending</button>
          <button className="pink-nav-btn">💖 Sale</button>
          <button className="pink-nav-btn">👤 Account</button>
        </div>

        {/* Products Grid — "stuff" part of the store */}
        <div className="products-section">
          <h2 className="section-title">✨ Handpicked for you ✨</h2>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                <div className="product-info">
                  <div className="product-name">{product.name}</div>
                  <div className="product-price">${product.price.toFixed(2)}</div>
                  <button
                    className="add-to-cart-btn"
                    onClick={addToCart}
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* extra footer stuff */}
        <footer className="store-footer">
          <p>💕 Free shipping on orders $50+ | 30-day returns | Glow responsibly 💕</p>
          <p style={{ fontSize: '0.8rem', marginTop: '12px' }}>© 2025 Blush & Blue — where style meets dreamy gradients</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
