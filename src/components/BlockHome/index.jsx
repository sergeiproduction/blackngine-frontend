import React from 'react';
import { Link } from "react-router-dom";
import { FaChartLine, FaCogs, FaRobot, FaMoneyBillAlt, FaShieldAlt, FaChartBar, FaCloudUploadAlt, FaUserCheck } from 'react-icons/fa';
import styles from './BlockHome.module.scss';

const BlockHome = () => {
  return (
    <div className={styles.blockHome}>
      <div className={styles.content}>
        <h2 className={styles.title}>Платформа для аудита и оптимизации бизнес-процессов</h2>
        <p className={styles.description}>
          Наша инновационная платформа использует передовые технологии искусственного интеллекта и облачные вычисления для глубокого анализа и эффективной оптимизации бизнес-процессов на предприятиях любого масштаба.
        </p>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaChartLine />
            </div>
            <h3 className={styles.featureTitle}>Анализ процессов</h3>
            <p className={styles.featureDescription}>
              Платформа изучает существующие процессы, выявляет ключевые параметры и причинно-следственные связи, визуализируя места падения эффективности с помощью продвинутых алгоритмов анализа.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaCogs />
            </div>
            <h3 className={styles.featureTitle}>Рекомендации по оптимизации</h3>
            <p className={styles.featureDescription}>
              На основе всестороннего анализа платформа предлагает конкретные рекомендации по оптимизации процессов и прогнозирует результат от принятия мер, помогая руководителям принимать обоснованные решения.
            </p>
          </div>
          <div className={styles.feature}>
            <div className={styles.featureIcon}>
              <FaRobot />
            </div>
            <h3 className={styles.featureTitle}>Искусственный интеллект</h3>
            <p className={styles.featureDescription}>
              Обученный искусственный интеллект изучает процессы, определяет степень важности каждого этапа и критичность наличия тех или иных элементов, предлагая инновационные решения для повышения эффективности.
            </p>
          </div>
        </div>
        <div className={styles.benefits}>
          <h2 className={styles.benefitsTitle}>Преимущества платформы</h2>
          <div className={styles.benefitsList}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaMoneyBillAlt />
              </div>
              <div className={styles.benefitText}>
                <h4>Сокращение издержек</h4>
                <p>Оптимизация ресурсов и снижение затрат</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaShieldAlt />
              </div>
              <div className={styles.benefitText}>
                <h4>Повышение безопасности</h4>
                <p>Выявление и устранение рисков</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaChartBar />
              </div>
              <div className={styles.benefitText}>
                <h4>Рост эффективности</h4>
                <p>До 30% повышение производительности</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaCloudUploadAlt />
              </div>
              <div className={styles.benefitText}>
                <h4>Быстрая интеграция</h4>
                <p>Плавный переход на новую систему</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>
                <FaUserCheck />
              </div>
              <div className={styles.benefitText}>
                <h4>Повышение удовлетворенности</h4>
                <p>Клиентов и сотрудников</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.additionalInfo}>
          <h2 className={styles.additionalTitle}>Как это работает?</h2>
          <p className={styles.additionalDescription}>
            Наша платформа использует машинное обучение для анализа больших объемов данных, что позволяет выявить скрытые закономерности и оптимизировать процессы. Вы можете интегрировать платформу с существующими системами управления, что обеспечит плавный переход и минимизирует время на внедрение.
          </p>
          <h3 className={styles.additionalSubTitle}>Этапы внедрения:</h3>
          <div className={styles.roadmap}>
            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Анализ текущих бизнес-процессов</h4>
                <p className={styles.stepDescription}>Оценка существующих процессов для выявления проблемных зон.</p>
              </div>
            </div>
            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Определение ключевых показателей эффективности</h4>
                <p className={styles.stepDescription}>Установка метрик для оценки успеха оптимизации.</p>
              </div>
            </div>
            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Настройка платформы под специфические нужды бизнеса</h4>
                <p className={styles.stepDescription}>Индивидуальная настройка инструментов для вашего бизнеса.</p>
              </div>
            </div>
            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>4</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Обучение сотрудников и запуск платформы</h4>
                <p className={styles.stepDescription}>Подготовка команды к работе с новой системой.</p>
              </div>
            </div>
            <div className={styles.roadmapStep}>
              <div className={styles.stepNumber}>5</div>
              <div className={styles.stepContent}>
                <h4 className={styles.stepTitle}>Мониторинг и оптимизация процессов на основе полученных данных</h4>
                <p className={styles.stepDescription}>Постоянный анализ результатов и корректировка стратегии.</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Начните оптимизацию бизнеса уже сегодня!</h2>
          <Link to="/app" className={styles.ctaButton}>Перейти в приложение</Link>
        </div>
      </div>
    </div>
  );
};

export default BlockHome;