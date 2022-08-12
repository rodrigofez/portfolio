import nav from "../styles/Nav.module.css";
import NavLink from "./NavLink";

const links = [
  {
    title: "About me",
    src: "#about",
  },
  {
    title: "Skills",
    src: "#skills",
  },
  {
    title: "Projects",
    src: "#projects",
  },
  {
    title: "Contact",
    src: "#contact",
  },
];

export const Navbar = ({}) => {
  return (
    <nav className={nav.container}>
      {links.map((link, index) => (
        <NavLink key={link.src} {...link} index={index} />
      ))}
    </nav>
  );
};
