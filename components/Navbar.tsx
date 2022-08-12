import { useTranslation } from "next-i18next";
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
  return (
    <nav className={nav.container}>
      {links.map(({ src, title }, index) => (
        <NavLink key={src} src={src} title={t(title)} index={index} />
      ))}
    </nav>
  );
};
