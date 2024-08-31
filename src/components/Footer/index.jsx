import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; // Импортируем новую иконку
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.linksBlock}>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>Компания</h4>
            <ul className={styles.linksList}>
              <li><Link to="/about">О нас</Link></li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>Поддержка</h4>
            <ul className={styles.linksList}>
              {/* <li><Link to="/faq">FAQ</Link></li> */}
              <li><Link to="/contact">Контакты</Link></li>
              <li>
                <a href="https://blackngine-backend.onrender.com/docs" target="_blank" rel="noopener noreferrer">Документация</a>
              </li>
            </ul>
          </div>
          <div className={styles.linksColumn}>
            <h4 className={styles.linksTitle}>Присоединяйтесь к нам</h4>
            <ul className={styles.socialList}>
              <li>
                <a href="https://vc.ru/u/1295074-blackngine-technologies" target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
                </a>
              </li>
              {/* <li><Link to="/facebook"><FaFacebookF /></Link></li>
              <li><Link to="/twitter"><FaTwitter /></Link></li>
              <li><Link to="/github"><FaGithub /></Link></li> */}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        &copy; {new Date().getFullYear()} Blackngine. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;