import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import SvgLogo from "../../svg/SvgLogo";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoBlock}>
          <Link to="/" className={styles.logoLink}>
            <SvgLogo />
          </Link>
        </div>
        <nav className={styles.navBlock}>
          <Link to="/link1">Ссылка 1</Link>
          <Link to="/link2">Ссылка 2</Link>
          <Link to="/link3">Ссылка 3</Link>
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

export default Header;