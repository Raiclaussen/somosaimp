import React from 'react';
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Products from './components/Products/Products';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Nuestros Productos" />
      <Products />
    </div>
  );
}

export default App;
