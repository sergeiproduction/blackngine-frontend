import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.scss";
import { SvgLogoWhite } from "../../svg/SvgLogo";

const Header = () => {
  const location = useLocation(); // Получаем информацию о текущем пути

  // Функция для проверки активности ссылки "Приложение"
  const isAppLinkActive = () => {
    return (
      location.pathname === "/app" ||
      location.pathname.startsWith("/app/")
    );
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBlock}>
          <Link to="/" className={styles.logoLink}>
            <SvgLogoWhite />
          </Link>
        </div>
        <nav className={styles.navBlock}>
          <Link to="/" className={location.pathname === '/' ? styles.active : ''}>Главная</Link>
          <Link
            to="/app"
            className={isAppLinkActive() ? styles.active : ''}
          >
            Приложение
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? styles.active : ''}>О нас</Link>
        </nav>
        <div className={styles.loginBlock}>
          <Link to="/login">
            <button className={styles.loginButton}>Войти</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header