function filterProducts(products, minPrice, maxPrice, category) {
    if (!Array.isArray(products)) {
        throw new Error('Products must be an array');
    }

    if (typeof minPrice !== 'number' || typeof maxPrice !== 'number' || minPrice < 0 || maxPrice < 0 || minPrice > maxPrice) {
        throw new Error('Invalid price range');
    }

    if (typeof category !== 'string' && category !== undefined) {
        throw new Error('Category must be a string');
    }

    return products.filter(product => {
        const priceInRange = product.price >= minPrice && product.price <= maxPrice;
        const categoryMatch = category ? product.category === category : true;
        return priceInRange && categoryMatch;
    });
}

module.exports = filterProducts;
