import Icon from "../../components/Icon/Icon";
import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.css";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import { motion } from "framer-motion";
import profilePictureImage from "../../assets/images/profilePicture.jpeg";

const Home = () => {

  const sendEmail = () => {
    const email = 'torstendngh@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={styles.home}>
      <Navbar />
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <img
            className={styles.profilePicture}
            src={profilePictureImage}
            alt=""
          />
          <h2>Developer & Creative</h2>
          <motion.h1
            initial={{ opacity: 0, x: -100, filter: "blur(16px)" }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8,
                delay: 0.1,
              },
            }}
          >
            @torstendngh
          </motion.h1>
          <div className={styles.tagContainer}>
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(16px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.2,
                },
              }}
            >
              <Icon icon={"language"} />
              English, German
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(16px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.3,
                },
              }}
            >
              <Icon icon={"location"} />
              Würzburg, Germany
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 16, filter: "blur(16px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 0.8,
                  delay: 0.4,
                },
              }}
            >
              <Icon icon={"send"} />
              torstendngh@gmail.com
            </motion.div>
          </div>
          <button className={styles.primaryButton} onClick={() => sendEmail()}>
            <span>Contact Me</span>
          </button>
        </div>
      </section>
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
};

export default Home;
