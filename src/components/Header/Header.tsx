import { useState } from "react";
import styles from "./Header.module.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [stateMenu, setStateMenu] = useState<boolean>(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const navStyle = stateMenu ? styles.navHamburger : styles.navList;
  const hamburgerActive = stateMenu ? styles.active : "";
  const showMenu = () => {
    setStateMenu(!stateMenu);
    console.log(stateMenu);
  };
  const hideMenu = () => {
    setStateMenu(false);
  };

  return (
    <aside className={styles.header}>
      <div className="container">
        <div className={styles.headerFlex}>
          <h1 className={styles.headerLogo}>Sanjar</h1>
          <nav>
            <div
              onClick={showMenu}
              className={`${styles.hamburgerMenu} ${hamburgerActive}`}
            >
              <div className={styles.hamburgerMenuLine}></div>
              <div className={styles.hamburgerMenuLine}></div>
              <div className={styles.hamburgerMenuLine}></div>
            </div>
            <ul className={`${navStyle} ${styles.navFlex}`}>
              <Link
                onClick={hideMenu}
                className={currentPath === "/" ? styles.active : styles.navItem}
                to={"/"}
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                onClick={hideMenu}
                className={
                  currentPath === "/about" ? styles.active : styles.navItem
                }
                to={"/about"}
              >
                {" "}
                About me{" "}
              </Link>
              <Link
                onClick={hideMenu}
                className={
                  currentPath === "/skills" ? styles.active : styles.navItem
                }
                to={"/skills"}
              >
                {" "}
                Skills{" "}
              </Link>
              <Link
                onClick={hideMenu}
                className={
                  currentPath === "/projects" ? styles.active : styles.navItem
                }
                to={"/projects"}
              >
                {" "}
                Projects{" "}
              </Link>
              <Link
                onClick={hideMenu}
                className={
                  currentPath === "/contact" ? styles.active : styles.navItem
                }
                to={"/contact"}
              >
                {" "}
                Contact{" "}
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Header;
