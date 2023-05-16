/* eslint-disable react/jsx-no-undef */
import './App.scss';
import { Footer } from './app/shared/Footer/Footer';
import { Header } from './app/shared/Header/Header';
import { RegisterPage } from './views/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { ErrorPage } from './views/ErrorPage/ErrorPage';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="register" element={<RegisterPage />} />
          <Route path="error" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
