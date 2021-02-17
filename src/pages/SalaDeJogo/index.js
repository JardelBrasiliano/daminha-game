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
        <button
          className="salaDejogo-btn-limpar"
          type="button"
          onClick={() => window.location.reload()}
        >
          Limpar
        </button>
        <JogoDeDama />
      </div>
      <Footer />
    </>
  );
}

export default SalaDeJogo;
