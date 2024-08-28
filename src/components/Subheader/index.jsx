import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from './Subheader.module.scss';

const Subheader = () => {
  const location = useLocation(); // Получаем информацию о текущем пути

  return (
    <div className={styles.subheader}>
      <div className={styles.processName}>Название процесса</div>
      <div className={styles.links}>
        <Link
          to="/app/configurator"
          className={`${styles.link} ${location.pathname === '/app/configurator' ? styles.active : ''}`}
        >
          Конфигуратор
        </Link>
        <Link
          to="/app/journal"
          className={`${styles.link} ${location.pathname === '/app/journal' ? styles.active : ''}`}
        >
          Журнал событий
        </Link>
        {/* Добавьте дополнительные ссылки по мере необходимости */}
      </div>
    </div>
  );
};

export default Subheader;