/* eslint-disable react/jsx-no-undef */
import './App.scss';
import { Header } from './app/shared/Header/Header';
import { ArmagnacCatalog } from './views/ArmagnacCatalog/ArmagnacCatalog';
import { Basket } from './views/Basket/Basket';
import { CardProduct } from './views/CardProduct/CardProduct';
import { CocktailsCatalog } from './views/CocktailsCatalog/CocktailsCatalog';

import React from 'react';

function App() {
  return (
    <>
    
 <Header/>
      <main>
        <CardProduct />
      </main>
   
    </>
  );
}

export default App;
