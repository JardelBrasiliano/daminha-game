import React from 'react';

import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-esquerda">
          <p>DAMINHA</p>
        </div>
        <div className="header-direita">
          <div className="header-imagem-aranha" />
          <a
            href="https://github.com/JardelBrasiliano?tab=repositories"
            className="header-anima-menu"
            target="blank"
          >
            Meus Repositorios
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
