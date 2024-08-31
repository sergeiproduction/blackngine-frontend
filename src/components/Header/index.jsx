import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, logout } from "../../redux/slices/user";
import styles from "./Header.module.scss";
import { SvgLogoWhite } from "../../svg/SvgLogo";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  // const userName = useSelector((state) => state.user.data?.name); // Получаем имя пользователя из Redux
  const userName = "Выйти"; // Имя пользователя или текст кнопки выхода
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false); // Состояние для модального окна

  // Функция для проверки активности ссылки "Приложение"
  const isAppLinkActive = () => {
    return (
      location.pathname === "/app" || location.pathname.startsWith("/app/")
    );
  };

  // Обработчик выхода из аккаунта
  const handleLogout = () => {
    setShowLogoutConfirmation(true); // Показываем модальное окно
  };

  // Обработчик подтверждения выхода
  const handleConfirmLogout = () => {
    setShowLogoutConfirmation(false);
    dispatch(logout()); // Вызываем действие logout из Redux
    navigate("/"); // Перенаправляем на главную страницу после выхода
  };

  // Обработчик клика вне модального окна
  const handleClickOutside = (e) => {
    if (e.target.classList.contains(styles.logoutModal)) {
      setShowLogoutConfirmation(false);
    }
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
          <Link
            to="/"
            className={location.pathname === "/" ? styles.active : ""}
          >
            Главная
          </Link>
          {/* <Link
            to="/app"
            className={isAppLinkActive() ? styles.active : ''}
          >
            Приложение
          </Link> */}
          <Link
            to="/about"
            className={location.pathname === "/about" ? styles.active : ""}
          >
            О нас
          </Link>
        </nav>
        <div className={styles.loginBlock}>
          {!isAuth ? (
            <Link to="/login">
              <button className={styles.loginButton}>Войти</button>
            </Link>
          ) : (
            <div className={styles.userName} onClick={handleLogout}>
              {userName}
            </div>
          )}
        </div>
      </div>
      {/* Модальное окно для подтверждения выхода */}
      {showLogoutConfirmation && (
        <div className={styles.logoutModal} onClick={handleClickOutside}>
          <div className={styles.logoutModalContent}>
            <h3>Вы уверены, что хотите выйти?</h3>
            <div className={styles.logoutModalButtons}>
              <button
                className={styles.yesButton}
                onClick={handleConfirmLogout}
              >
                Да
              </button>
              <button
                className={styles.noButton}
                onClick={() => setShowLogoutConfirmation(false)}
              >
                Нет
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
