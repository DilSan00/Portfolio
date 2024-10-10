import { FC } from "react";
import styles from "./Contact.module.scss";
import MyContact from "./MyContact/MyContact";
import ContactForm from "./ContactForm/ContactForm";

const Contact: FC = () => {
  return (
    <div className={styles.contact}>
      <div className="container">
        <div className={styles.contactContainer}>
          <MyContact />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
