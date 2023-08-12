import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <h1 className={styles.title}>Alain Kuiete</h1>
      <p>54 Chapin Ave, Waterbury, CT USA</p>
      <p>+1 856 540 8179 | alainkuiete@gmail.com</p>
      <div className={styles.socials}>
        <img
          src="/assets/socials/twitter.png"
          alt="social-icon"
          className={styles.icon}
        />
        <img
          src="/assets/socials/linkedin.png"
          alt="social-icon"
          className={styles.icon}
        />
        <img
          src="/assets/socials/github.png"
          alt="social-icon"
          className={styles.icon}
        />
      </div>
    </footer>
  );
};
