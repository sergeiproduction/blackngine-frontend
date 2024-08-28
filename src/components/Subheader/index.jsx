import React from 'react';
import styles from './Subheader.module.scss';

const Subheader = () => {
  return (
    <div className={styles.subheader}>
      <div className={styles.processName}>Название процесса</div>
      <div className={styles.links}>
        <a href="#" className={styles.link}>Конфигуратор</a>
        <a href="#" className={styles.link}>Журнал событий</a>
        {/* Добавьте дополнительные ссылки по мере необходимости */}
      </div>
    </div>
  );
};

export default Subheader;