import { useTranslation } from "next-i18next";
import { BrandGithub, BrandLinkedin, Mail, Phone } from "tabler-icons-react";
import { Section } from "./Section";

import styles from "../styles/Contact.module.css";

const contactList = [
  { title: "Github", src: "", icon: BrandGithub },
  { title: "Linkedin", src: "", icon: BrandLinkedin },
  { title: "Phone", src: "", icon: Phone },
  { title: "Email", src: "", icon: Mail },
];

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <Section id="contact" title={t("title")} subtitle={t("subtitle")}>
      <div className={styles.container}>
        {contactList.map((contact) => (
          <div className={styles.card} key={contact.title}>
            <contact.icon size={40} strokeWidth="1.5px"></contact.icon>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
