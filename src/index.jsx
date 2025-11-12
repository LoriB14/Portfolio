import { createRoot } from 'react-dom/client';
import React from 'react';
import './index.css';
import Header from './components/Header.jsx';
import Main from './Components/sections.jsx';
import Footer from './components/Footer.jsx';

const root = createRoot(document.getElementById('root'));

root.render(<Page />);

function Page() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}