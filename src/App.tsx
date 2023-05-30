/* eslint-disable react/jsx-no-undef */
import './App.scss';
import { ArmagnacCatalog } from './views/ArmagnacCatalog/ArmagnacCatalog';
import { Basket } from './views/Basket/Basket';
import { Footer } from './app/shared/Footer/Footer';
import { Header } from './app/shared/Header/Header';
import { ProductDetailsPage } from './views/CardProduct/Product DetailsPage/ProductDetailsPage';

import { CocktailsCatalog } from './views/CocktailsCatalog/CocktailsCatalog';

import React from 'react';

function App() {
  return (
    <>

      <Header />
      <main>
        <ProductDetailsPage />
      </main>
<Footer/>
    </>
  );
}

export default App;
