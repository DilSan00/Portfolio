import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className="container">
        <div className={styles.skillsProgress}>
          <div className={styles.language}>
            <h1> Core Technologies </h1>
            <ul>
              <li> Html </li>
              <li> Css / Scss </li>
              <li> JavaScript </li>
              <li> TypeScript </li>
            </ul>
          </div>

          <div className={styles.language}>
            <h1> Frameworks & libraries </h1>
            <ul>
              <li> React JS </li>
              <li> Antd </li>
              <li> Bootstrap </li>
              <li> Tailwind CSS </li>
            </ul>
          </div>

          <div className={styles.language}>
            <h1> State Management </h1>
            <ul>
              <li> Redux Toolkit </li>
              <li> MobX </li>
            </ul>
          </div>

          <div className={styles.language}>
            <h1> Assembly & Automation Tools </h1>
            <ul>
              <li> Webpack </li>
              <li> Vite </li>
            </ul>
          </div>

          <div className={styles.language}>
            <h1> Testing Tools </h1>
            <ul>
              <li> Jest </li>
              <li> React Testing Library </li>
            </ul>
          </div>

          <div className={styles.language}>
            <h1> Version control systems </h1>
            <ul>
              <li> Git </li>
            </ul>
          </div>

          <div className={styles.language}>
            <h1> Working with the API </h1>
            <ul>
              <li> Rest API </li>
            </ul>
          </div>

          <div className={styles.language}>
            <h1> UI/UX tools </h1>
            <ul>
              <li> Figma </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
