import Icon from "../../../components/Icon/Icon";
import SkillTile from "./SkillTile/SkillTile";
import styles from "./SkillsSection.module.css"

const SkillsSection = () => {
  return (
    <section className={styles.skillsSection}>
      <div className={styles.container}>
        <h1 id="skills">
          <Icon icon={"skills"} />
          Skills
        </h1>
        <div className={styles.grid}>
          <SkillTile title={"React"} icon={"react"} color={"#61DAFB"}/>
          <SkillTile title={"JavaScript"} icon={"javascript"} color={"#F7DF1E"}/>
          <SkillTile title={"TypeScript"} icon={"typescript"} color={"#3178C6"}/>
          <SkillTile title={"Figma"} icon={"figma"} color={"#F24E1E"}/>
          <SkillTile title={"CSS"} icon={"css"} color={"#2965F1"}/>
          <SkillTile title={"HTML"} icon={"html"} color={"#EF652A"}/>
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
          <span>JSON</span>
          <span>jQuery</span>
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
          <span>Solidity</span>
        </div>
        <h2>Design</h2>
        <div className={styles.smallGrid}>
          <span>Figma</span>
          <span>Adobe XD</span>
          <span>Affinity Designer</span>
        </div>
        <h2>Software</h2>
        <div className={styles.smallGrid}>
          <span>Microsoft Visual Studio Code</span>
          <span>Microsoft Office</span>
          <span>Jira</span>
          <span>Android Studio</span>
          <span>Slack</span>
        </div>
        <h2>Skills Acquired in a Business Informatics Degree</h2>
        <div className={styles.smallGrid}>
          <span>Java Programming, Object-Oriented Programming (OOP)</span>
          <span>IT Project Management (Agile, Kanban, Scrum, User Stories)</span>
          <span>Software Engineering</span>
          <span>IT Risk Management</span>
          <span>Data Communication</span>
          <span>Databases (SQL and Modeling)</span>
          <span>Marketing & Sales</span>
          <span>Innovation Management & Entrepreneurship</span>
          <span>Business and Economics (BWL & VWL)</span>
          <span>IT Organization & IT Controlling</span>
          <span>Blockchain & Smart Contracts (Solidity)</span>
          <span>Socioinformatics</span>
          <span>Test-Driven Development</span>
          <span>Behavior-Driven Development</span>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
