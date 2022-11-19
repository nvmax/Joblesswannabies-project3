<Link to="/browse">← Back to Browsing </Link>

<button onClick={addToCart}>Add to Cart</button>

<button
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button>

<strong>Price:</strong>${currentProduct.msrp}{' '}



<p>{currentProduct.description}</p>