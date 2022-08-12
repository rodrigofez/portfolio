import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import nav from "../styles/Nav.module.css";
import NavLink from "./NavLink";

const links = [
  {
    title: "about",
    src: "#about",
  },
  {
    title: "skills",
    src: "#skills",
  },
  {
    title: "projects",
    src: "#projects",
  },
  {
    title: "contact",
    src: "#contact",
  },
];

export const Navbar = ({}) => {
  const { t } = useTranslation("nav");
  const { locale, locales } = useRouter();
  return (
    <nav id="top" className={nav.container}>
      <div>
        {links.map(({ src, title }, index) => (
          <NavLink key={src} src={src} title={t(title)} index={index} />
        ))}
      </div>
      <div className={nav.flag}>
        {locale === "en" ? (
          <Image src="/es.svg" alt="es flag" objectFit="cover" layout="fill" />
        ) : (
          <Image src="/us.svg" alt="en flag" objectFit="cover" layout="fill" />
        )}
      </div>
    </nav>
  );
};
