import React from 'react';
import styles from './rodape.module.css';

export default function Rodape() {
  return (
    <footer className={styles.footer}>
      <p>Feito com muito carinho por Emerson Moreira</p>
      <p>
        Desafio #001 -{' '}
        <a
          href="https://devsoutinho.notion.site/CSS-Preview-Border-Radius-DevSoutinhoChallenges-14fd017db675495b81ce5cd5f68981f0"
          target="_blank"
          rel="noreferrer"
        >
          Desafio propsto pelo #DevSoutinhoLabs!
        </a>
      </p>
    </footer>
  );
}
