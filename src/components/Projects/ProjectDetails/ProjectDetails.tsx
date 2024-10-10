import styles from "./ProjectDetails.module.scss";
import { useEffect, useState } from "react";
import { getRepisitories } from "../../../api/getRepisitors";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = id ? parseInt(id, 10) : -1;
  const [project, setProject] = useState<any>(null);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const repos: any = await getRepisitories();
      const foundProject = repos.find((repo: any) => repo.id === projectId);
      setProject(foundProject || null);
    };

    fetchProjectDetails();
  }, [projectId]);

  return (
    <section className={styles.projectDetails}>
      <div className="container">
        {project ? (
          <figure key={project.id}>
            <div className={styles.projectDetailsImgcontainer}>
              <img
                className={styles.projectDetailsIMG}
                src={project.owner?.avatar_url}
                alt="imageTitle"
              />
            </div>
            <figcaption className={styles.projectDate}>
              <Link to={"/projects"} className={styles.projectDateBack}>
                Back
              </Link>
              <h2 className={styles.projectDateTitle}>
                <strong>Title: </strong> {project.name}
              </h2>
              <a
                className={styles.projectDateLink}
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong>Link: </strong> {project.html_url}
              </a>
            </figcaption>
          </figure>
        ) : (
          <p>Project not found</p>
        )}
      </div>
    </section>
  );
};

export default ProjectDetails;
