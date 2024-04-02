import styles from './Navbar.module.css';
import profilePicture from '../../assets/images/profilePicture.jpeg';
import Icon from '../Icon/Icon';
import { useEffect, useState } from 'react';

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled to true if window is scrolled more than 0, otherwise false
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up function to remove event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className={styles.container}>
      <nav className={`${styles.navbar} ${scrolled ? styles.navbarBackground : null}`}>
        <div className={styles.leftContainer}>
          <img className={styles.profilePicture} src={profilePicture} alt="" />
          {
            scrolled &&
            <span className={styles.name}>@torstendngh</span>
          }
        </div>
        <div className={styles.rightContainer}>
          <button className={styles.button}><Icon icon={"x"} /></button>
          <button className={styles.button}><Icon icon={"githubThin"} /></button>
          <button className={styles.button}><Icon icon={"linkedIn"} /></button>
          <button className={styles.primaryButton}>
            Contact
            <Icon icon={"send"} />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;