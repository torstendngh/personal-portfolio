import styles from "./Navbar.module.css";
import profilePicture from "../../assets/images/profilePicture.jpeg";
import Icon from "../Icon/Icon";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if window is scrolled more than 0, otherwise false
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up function to remove event listener when component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  const sendEmail = () => {
    const email = 'torstendngh@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className={styles.container}>
      <nav
        className={`${styles.navbar} ${
          scrolled ? styles.navbarBackground : null
        }`}
      >
        <AnimatePresence>
          <div className={styles.leftContainer}>
            {scrolled && (
              <>
                <motion.img
                  className={styles.profilePicture}
                  src={profilePicture}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <motion.span
                  className={styles.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  @torstendngh
                </motion.span>
              </>
            )}
          </div>
          <div className={styles.centerContainer}>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#about">About</a>
          </div>
          <div className={styles.rightContainer}>
            <button className={styles.button}>
              <Icon icon={"x"} />
            </button>
            <button className={styles.button}>
              <Icon icon={"githubThin"} />
            </button>
            <button className={styles.button}>
              <Icon icon={"linkedIn"} />
            </button>
            <button className={styles.primaryButton} onClick={() => sendEmail()}>
              <span>Contact</span>
            </button>
          </div>
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
