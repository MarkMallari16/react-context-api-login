import React, { useState } from 'react'

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");

    const sortProducts = () => {
        const sortedProducts = [...products].sort((a, b) => {
            return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
        })

        setProducts(sortedProducts);
        setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    }
    const addProduct = (product) => {
        const newProduct = { ...product, id: products.length + 1 };
        setProducts([...products, newProduct]);
    }
    const updateProduct = (id, updatedProductData) => {
        setProducts(prevProducts =>
            prevProducts.map(product =>
                product.id === id ? { ...product, ...updatedProductData } : product
            )
        );
    };
    const deleteProduct = (id) => {
        const filterProducts = products.filter((product) => product.id !== id);
        setProducts(filterProducts);
    }
    return { products, addProduct, deleteProduct, updateProduct, sortProducts, sortOrder };
}

export default useProducts