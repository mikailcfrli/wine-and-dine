/* eslint-disable react/jsx-no-undef */
import './App.scss';
import { Basket } from './views/Basket/Basket';
import { CocktailsCatalog } from './views/CocktailsCatalog/CocktailsCatalog';
import { CognacCatalog } from './views/CognacCatalog/CognacCatalog';
import { ErrorPage } from './views/ErrorPage/ErrorPage';
import { Footer } from './app/shared/Footer/Footer';
import { Header } from './app/shared/Header/Header';
import { HomePage } from './views/HomePage/HomePage';
import { LoginPage } from './views/LoginPage/LoginPage';
import { ProductDetailsPage } from './views/ProductDetailsPage/ProductDetailsPage';
import { RegisterPage } from './views/RegisterPage/RegisterPage';
import { RomCatalog } from './views/RomCatalog/RomCatalog';
import { Route, Routes } from 'react-router-dom';
import { SparklingCatalog } from './views/SparklingCatalog/SparklingCatalog';
import { VodkaCatalog } from './views/VodkaCatalog/VodkaCatalog';
import { WhiskeyCatalog } from './views/WhiskeyCatalog/WhiskeyCatalog';
import { WineCatalog } from './views/WineCatalog/WineCatalog';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="basket" element={<Basket />} />
          <Route path="product" element={<ProductDetailsPage />} />
          <Route path="cocktails" element={<CocktailsCatalog />} />
          <Route path="cognac" element={<CognacCatalog />} />
          <Route path="rom" element={<RomCatalog />} />
          <Route path="sparling" element={<SparklingCatalog />} />
          <Route path="vodka" element={<VodkaCatalog />} />
          <Route path="wine" element={<WineCatalog />} />
          <Route path="whiskey" element={<WhiskeyCatalog />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
