import React, { useState } from 'react';

import './styles.css';

function Header() {
  const [animaNome, setAnimaNome] = useState(false);

  setTimeout(() => {
    setAnimaNome(true);
  }, 6000);

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-esquerda">
          <p>DAMINHA</p>
        </div>
        <div className="header-direita">
          <div className="header-imagem-aranha" />
          {animaNome ? (
            <div className="header-menu">
              <a
                href="https://github.com/JardelBrasiliano?tab=repositories"
                className="header-anima-menu"
              >
                Meus Repositorios
              </a>
            </div>
          ) : (
            ''
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
