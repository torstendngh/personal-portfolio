import Icon from "../../../components/Icon/Icon";
import ProjectTile from "./ProjectTile/ProjectTile";
import styles from "./ProjectsSection.module.css";
import webWerkzeugImage from "../../../assets/images/projects/webwerkzeug.jpg"

const ProjectsSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1>
          <Icon icon={"projects"} />
          Projects
        </h1>
        <div className={styles.grid} >
          <ProjectTile title={"WebWerkzeug"} tags={["React", "JavaScript", "Vite"]} description={"A collection of tools for web development"} isOnline image={webWerkzeugImage}/>
          <ProjectTile title={"ApplyCable"} tags={["React", "JavaScript", "Vite", "Firebase"]} description={"Create links that lead to editable application forms"} isOnline/>
          <ProjectTile title={"torstendngh.com"} tags={["React", "JavaScript", "Vite"]} description={"The website you are looking at right now"} isOnline/>
          <ProjectTile title={"OracleOS"} tags={["React", "JavaScript", "Vite"]} description={"A mock futuristic OS with a few tiny apps"}/>
          <ProjectTile title={"ChainFunding"} tags={["React", "JavaScript", "Thirdweb"]} description={"A crowdfunding site that relies on smart contracts and the blockchain"}/>
          <ProjectTile title={"Raccoon"} tags={["React", "JavaScript", "Electron"]} description={"A desktop app for note taking"}/>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
