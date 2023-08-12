import React from 'react';
import './Products.css';

const productsData = [
  {
    id: 1,
    title: 'Folletos Publicitarios',
    image: '../assets/folletospublicitarios.svg',
    price: 25.00, 
  },

  {
    id: 2,
    title: 'Banners',
    image: '../assets/bannerspublicitarios.png',
    price: 50.00, 
  },

  {
    id: 3,
    title: 'Tarjetas de Presentación',
    image: '../assets/tarjetadepresentacion.svg',
    price: 10.00, 
  },

  {
    id: 4,
    title: 'Paneles Publicitarios',
    image: '../assets/panelespublicitarios.png',
    price: 100.00, 
  }
];

const Products = () => {
  return (
    <div className="products">
      {productsData.map(product => (
        <div key={product.id} className="product">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p className="product-price"> Precio: S/ {product.price.toFixed(2)}</p>
          <button> Comprar </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
