import styles from "./Home.module.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className={styles.homeContainer}>
          <div className={styles.homeText}>
            <h2 className={styles.homeTitle}>
              Hello! My name is <span>Sanjar Dildebaev</span>, <br />
              and I specialize in <span>Front-end</span> development.
            </h2>
            <p className={styles.homeDescription}>
              I create functional and visually appealing websites that not only
              capture attention but also provide an excellent user experience.
            </p>

            <Link className={styles.homeBtn} to={"/projects"}>
              {" "}
              ...Projects{" "}
            </Link>
          </div>
          <div className={styles.homeAvatar}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
