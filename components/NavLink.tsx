import { FC, LegacyRef } from "react";
import useAnimateOnScreen from "../hooks/useAnimateOnScreen";
import nav from "../styles/Nav.module.css";

interface NavLinkProps {
  title: string;
  src: string;
  index: number;
}

export const NavLink: FC<NavLinkProps> = ({ title, src, index }) => {
  const [elementRef, animation] = useAnimateOnScreen({
    animationClass: "fadeInFromTop",
    delay: 50 * index,
  });

  return (
    <a
      className={`${nav.link} ${animation}`}
      href={src}
      ref={elementRef as LegacyRef<HTMLAnchorElement>}
    >
      {title}
    </a>
  );
};

export default NavLink;
