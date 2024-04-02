import styles from './SkillTile.module.css'
import Icon from '../../../../components/Icon/Icon.jsx'

const SkillTile = ({icon, title, description, color}) => {
  return (
    <div className={styles.tile}>
      <div className={styles.icon} style={{color: color}}>
        <Icon icon={icon}/>
      </div>
        <h2>{title}</h2>
      {/* <span>{description}</span> */}
    </div>
  )
}

export default SkillTile
