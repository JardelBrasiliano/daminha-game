import React from 'react';

import Header from '../../components/Header';
import JogoDeDama from '../../components/JogoDeDama';
import Footer from '../../components/Footer';

import './styles.css';

function SalaDeJogo() {
  return (
    <>
      <Header />
      <div className="salaDeJogo-container">
        <JogoDeDama />
      </div>
      <Footer />
    </>
  );
}

export default SalaDeJogo;
