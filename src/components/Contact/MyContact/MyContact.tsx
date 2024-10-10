import styles from './MyContact.module.scss';


const MyContact = () => {
  return (
    <div className={styles.mycontact}>
      <h2 className={styles.mycontactTitle}>Contact Me</h2>
      <p className={styles.mycontactDescription}>
        If you have any questions, feedback, or opportunities,
        feel free to reach out to me using the form below or through other contact methods.
      </p>
          
      <div className={styles.mycontactInfo}>
        <p>
          <strong className={styles.mycontactInfoLabel}>Email:  </strong> 
            <a
              className={styles.mycontactInfoLink}  
              href="mailto:sanzardildebaev@gmail.com"
              >
              sanzardildebaev@gmail.com
            </a>
        </p>
        <p>
          <strong className={styles.mycontactInfoLabel}>LinkedIn:  </strong> 
          <a
            className={styles.mycontactInfoLink}
            href="https://www.linkedin.com/in/sanchos-d-783a79291/" 
            target="_blank" 
            >
            linkedin.com/in/sanchos-d
          </a>
        </p>
        <p>
          <strong className={styles.mycontactInfoLabel}>GitHub:  </strong> 
            <a
              className={styles.mycontactInfoLink}
              href="https://github.com/DilSan00" 
              target="_blank" 
              >
            github.com/DilSan00
          </a>
        </p>
      </div>
    </div>
  );
}


export default MyContact