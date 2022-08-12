import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);

  const { t } = useTranslation("nav");
  const { locale, route } = useRouter();
  return (
    <>
      <nav id="top" className={nav.container}>
        <div
          className={`${nav.navlinks} ${
            showMenu ? nav["menu-visible"] : nav["menu-hidden"]
          } `}
        >
          {links.map(({ src, title }, index) => (
            <NavLink
              onClick={() => setShowMenu(false)}
              key={src}
              src={src}
              title={t(title)}
              index={index}
            />
          ))}
        </div>
        <div className={nav.flag}>
          {locale === "en" ? (
            <Link href={route} locale="es">
              <Image
                src="/es.svg"
                alt="es flag"
                objectFit="cover"
                layout="fill"
              />
            </Link>
          ) : (
            <Link href={route} locale="en">
              <Image
                src="/us.svg"
                alt="en flag"
                objectFit="cover"
                layout="fill"
              />
            </Link>
          )}
        </div>
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className={`${nav.hamburger} ${showMenu && nav["hamburger-active"]}`}
        ></div>
      </nav>
      {showMenu && (
        <div className={nav.overlay} onClick={() => setShowMenu(false)}></div>
      )}
    </>
  );
};
