import Icon from "../../../components/Icon/Icon";
import SkillTile from "./SkillTile/SkillTile";
import styles from "./SkillsSection.module.css"

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h1>
          <Icon icon={"skills"} />
          Skills
        </h1>
        <div className={styles.grid}>
          <SkillTile title={"React"} color={"#0a6ed1"} icon={"react"} description={"I have made many hundreds of projects with ReactJS and have 5 years of experiance with it."}/>
          <SkillTile title={"JS/HTML/CSS"} color={"#f7df1e"} icon={"javascript"} description={"JavaScript is the language I use the most in my projects, I am also learning TypeScript."}/>
          <SkillTile title={"Figma"} color={"#e34c26"} icon={"figma"} description={"I use Figma for all my designs and prototyping"}/>
        </div>
        <h2>Development</h2>
        <div className={styles.smallGrid}>
          <span>JavaScript</span>
          <span>TypeScript</span>
          <span>React</span>
          <span>CSS3</span>
          <span>HTML5</span>
          <span>SQL</span>
          <span>Java</span>
          <span>Python</span>
          <span>Vite</span>
          <span>Git</span>
          <span>ElectronJS</span>
          <span>Node.js</span>
          <span>React Router</span>
          <span>Express</span>
          <span>React Native</span>
          <span>GitHub</span>
          <span>Gerrit</span>
          <span>FHIR</span>
          <span>Thirdweb</span>
          <span>Svelte</span>
          <span>SvelteKit</span>
        </div>
        <h2>Design</h2>
        <div className={styles.smallGrid}>
          <span>Figma</span>
          <span>Adobe XD</span>
        </div>
        <h2>Software</h2>
        <div className={styles.smallGrid}>
          <span>Microsoft Visual Studio Code</span>
          <span>Microsoft Office</span>
          <span>Jira</span>
          <span>Android Studio</span>
          <span>Slack</span>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
