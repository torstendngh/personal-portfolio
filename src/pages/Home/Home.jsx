import Icon from "../../components/Icon/Icon";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h2>@torstendngh</h2>
          <motion.h1
            initial={{ opacity: 0, x: -100, filter: "blur(16px)" }}
            whileInView={{
              opacity: 1, x: 0, filter: "blur(0px)", transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.1
              }
            }}
          >
            Developer &<br />Creative
          </motion.h1>
          <div className={styles.tagContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(16px)" }}
              whileInView={{
                opacity: 1, y: 0, filter: "blur(0px)", transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.2
                }
              }}
            >
              <Icon icon={"language"} />
              English, German
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(16px)" }}
              whileInView={{
                opacity: 1, y: 0, filter: "blur(0px)", transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.3
                }
              }}
            >
              <Icon icon={"location"} />
              Würzburg, Germany
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(16px)" }}
              whileInView={{
                opacity: 1, y: 0, filter: "blur(0px)", transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.4
                }
              }}>
              <Icon icon={"github"} />
              torstendngh
            </motion.div>
          </div>
          <span>I design and develop apps and web apps that focus on the user experience. In my opinion minimalism is key, for the user and developer experience.</span>
        </div>
      </section>
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
};

export default Home;
