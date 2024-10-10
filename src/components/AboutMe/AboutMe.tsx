import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className={styles.aboutGoal}>
          <span className={styles.accent}>Goals and interests: </span>

          <div>
            <p className={styles.aboutItem}>
              I am a passionate front-end developer with a love for creating
              intuitive and visually appealing web applications. Programming is
              not just a job for me but an exciting pursuit that I am constantly
              looking to improve.
            </p>
            <p className={styles.aboutItem}>
              My goal is to continuously evolve in the field of front-end
              development by learning new technologies and approaches to create
              even higher-quality and innovative solutions. I focus on enhancing
              user experience and strive to ensure that every project is not
              only functional but also aesthetically pleasing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
