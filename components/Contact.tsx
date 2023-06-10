import { useTranslation } from "next-i18next";
import { BrandGithub, BrandLinkedin, Mail, Phone } from "tabler-icons-react";
import { Section } from "./Section";

import styles from "../styles/Contact.module.css";

const contactList = [
  { title: "Github", src: "https://github.com/rodrigofez", icon: BrandGithub },
  { title: "Linkedin", src: "https://www.linkedin.com/in/rodrigolopezdev/", icon: BrandLinkedin },
  { title: "Email", src: "mailto:rodrigolp0521@gmail.com", icon: Mail },
];

export const Contact = () => {
  const { t } = useTranslation("contact");

  return (
    <Section id="contact" title={t("title")} subtitle={t("subtitle")}>
      <div className={styles.container}>
        {contactList.map((contact) => (
          <a href={contact.src}>
          <div className={styles.card} key={contact.title}>
            <contact.icon size={28} strokeWidth="1.5px"></contact.icon>
          </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Contact;
