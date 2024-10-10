import { useEffect, useState } from "react";
import styles from "./Projects.module.scss";
import ProjectsItem from "./ProjectsItem/ProjectsItem";
import { getRepisitories } from "../../api/getRepisitors";

const Projects = () => {
  const [repisitories, setRepisitories] = useState<any[]>([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const repos: any = await getRepisitories();
      setRepisitories(repos);
    };

    fetchRepositories();
  }, []);

  console.log("rep", repisitories);

  return (
    <section className={styles.projects}>
      <div className="container">
        <div className={styles.projectsColumn}>
          {repisitories.map((project) => {
            return (
              <ProjectsItem
                key={project.id}
                id={project.id}
                name={project.name}
                links={project.html_url}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
