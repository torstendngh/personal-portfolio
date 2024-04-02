import Icon from "../../../../components/Icon/Icon";
import styles from "./ProjectTile.module.css";

const ProjectTile = ({ title, tags = [], description, isOnline = false, image }) => {
  return (
    <button className={styles.projectTile}>
      <div className={styles.image}>
        {
          !!image &&
          <img src={image} />
        }
      </div>
      <span className={styles.title}>{title}</span>
      <div className={styles.tagContainer}>
        {
          tags.map((tag, index) => <span key={index}>{tag}</span>)
        }
      </div>
      <span className={styles.description}>{description}</span>
      {
        !!isOnline && <div className={styles.isOnline}><Icon icon={"online"} />Online</div>
      }
    </button>
  );
};

export default ProjectTile;
