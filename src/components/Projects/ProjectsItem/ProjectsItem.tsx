import React from "react";
import styles from "./ProjectsItem.module.scss";
import { Link } from "react-router-dom";

interface ProjectsItemProps {
  id: number;
  name: string;
  links: string;
}

const ProjectsItem: React.FC<ProjectsItemProps> = ({ id, name, links }) => {
  return (
    <div className={styles.projectItem}>
      <div>
        <h2 className={styles.projectItemTitle}> {name} </h2>
        <a className={styles.projectItemLink} href={links}>
          {links}
        </a>
      </div>
      <Link to={`/projects/${id}`} className={styles.projectItemBtn}>
        Look
      </Link>
    </div>
  );
};

export default ProjectsItem;
