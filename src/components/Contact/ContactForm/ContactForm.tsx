import { useRef } from "react";
import { Button } from "antd";
import styles from "./ContactForm.module.scss";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = async (data: any) => {
    try {
      const response = await fetch("https://formspree.io/f/mqaznkaz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission error:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className={styles.contactForm}>
      <form
        className={styles.form}
        onSubmit={handleSubmit(sendEmail)}
        method="POST"
        ref={form}
      >
        <div className={styles.formBlock}>
          <label className={styles.formLabel} htmlFor="name">
            Name:
          </label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p>{errors.root?.message}</p>}
        </div>

        <div className={styles.formBlock}>
          <label className={styles.formLabel} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.formInput}
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p>{errors.root?.type}</p>}
        </div>

        <div className={styles.formBlock}>
          <label className={styles.formLabel} htmlFor="message">
            Message:
          </label>
          <textarea
            className={styles.formMessage}
            placeholder="Message"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p>message</p>}
        </div>

        <Button htmlType="submit" type="primary" danger>
          Send
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
