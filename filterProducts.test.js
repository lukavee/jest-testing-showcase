const filterProducts = require('./filterProducts');

test('filters products by price range', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10, category: 'A' },
        { id: 2, name: 'Product 2', price: 20, category: 'B' },
        { id: 3, name: 'Product 3', price: 30, category: 'A' },
        { id: 4, name: 'Product 4', price: 40, category: 'B' },
    ];

    const filteredProducts = filterProducts(products, 15, 35);
    expect(filteredProducts).toHaveLength(2);
    expect(filteredProducts).toEqual([
        { id: 2, name: 'Product 2', price: 20, category: 'B' },
        { id: 3, name: 'Product 3', price: 30, category: 'A' }
    ]);
});

test('filters products by category', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10, category: 'A' },
        { id: 2, name: 'Product 2', price: 20, category: 'B' },
        { id: 3, name: 'Product 3', price: 30, category: 'A' },
        { id: 4, name: 'Product 4', price: 40, category: 'B' },
    ];

    const filteredProducts = filterProducts(products, 0, Infinity, 'B');
    expect(filteredProducts).toHaveLength(2);
    expect(filteredProducts).toEqual([
        { id: 2, name: 'Product 2', price: 20, category: 'B' },
        { id: 4, name: 'Product 4', price: 40, category: 'B' }
    ]);
});

test('throws error for invalid input', () => {
    // Test invalid products
    expect(() => filterProducts('not an array', 0, 10)).toThrow('Products must be an array');

    // Test invalid price range
    expect(() => filterProducts([], 20, 10)).toThrow('Invalid price range');
    expect(() => filterProducts([], -10, 10)).toThrow('Invalid price range');

    // Test invalid category
    expect(() => filterProducts([], 0, 10, 123)).toThrow('Category must be a string');
});