import React from "react";
import styles from "./BlockContacts.module.scss";

const BlockContacts = () => {
  return (
    <div className={styles.blockContacts}>
      <h2 className={styles.title}>Контакты</h2>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Юридическая информация</h3>
        <p>ООО "Виртуальные Технологии"</p>
        <p>ОГРН: 1236300029745 от 25 октября 2023 г.</p>
        <p>ИНН: 6320077331</p>
        <p>КПП: 632001001</p>
        <p>
          Юридический адрес: 445043, Самарская область, г Тольятти, Южное ш, зд.
          163а
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.subtitle}>Связь с нами</h3>
        <p>
          По вопросам сотрудничества пишите на почту:
          <a href="mailto:vip.ar15@mail.ru" className={styles.link}>
            vip.ar15@mail.ru
          </a>
        </p>
        <p>
          Или звоните по телефону:
          <a href="tel:+79372369504" className={styles.link}>
            +7 (937) 236-95-04
          </a>
        </p>
      </div>
    </div>
  );
};

export default BlockContacts;
