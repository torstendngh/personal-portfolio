import styles from "./SkillTile.module.css";
import Icon from "../../../../components/Icon/Icon.jsx";

const SkillTile = ({ icon, title, color}) => {
  return (
    <div className={styles.tile} style={{"--skillTile-color": color + "20"}}>
      <div className={styles.icon}>
        <Icon icon={icon} />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default SkillTile;
