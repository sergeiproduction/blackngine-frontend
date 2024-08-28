import React from 'react';
import styles from './BlockAbout.module.scss';

const BlockAbout = () => {
  return (
    <div className={styles.blockAbout}>
      <h2 className={styles.title}>О нас</h2>
      <p>
        Проект реализован при поддержке{" "}
        <a href="https://fasie.ru" target="_blank" rel="noopener noreferrer">
          ФСИ (Фонда Содействия Инновациям)
        </a>
        , предоставленного в рамках программы «Студенческий стартап»
        федерального проекта{" "}
        <a
          href="https://univertechpred.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          «Платформа университетского технологического предпринимательства»
        </a>
        .
      </p>
    </div>
  );
};

export default BlockAbout;