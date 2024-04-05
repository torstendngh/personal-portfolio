import styles from "./SkillTile.module.css";
import Icon from "../../../../components/Icon/Icon.jsx";

const SkillTile = ({ icon, title}) => {
  return (
    <div className={styles.tile}>
      <div className={styles.icon}>
        <Icon icon={icon} />
      </div>
      <h2>{title}</h2>
    </div>
  );
};

export default SkillTile;
