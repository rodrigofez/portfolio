import { FC, LegacyRef } from "react";
import useAnimateOnScreen from "../hooks/useAnimateOnScreen";
import nav from "../styles/Nav.module.css";

interface NavLinkProps {
  title: string;
  src: string;
  index: number;
  onClick: () => void;
}

export const NavLink: FC<NavLinkProps> = ({ title, src, index, onClick }) => {
  const [elementRef, animation] = useAnimateOnScreen({
    animationClass: "fadeInFromTop",
    delay: 50 * index,
  });

  return (
    <a
      onClick={onClick}
      className={`${nav.link} ${animation}`}
      href={src}
      ref={elementRef as LegacyRef<HTMLAnchorElement>}
    >
      {title}
    </a>
  );
};

export default NavLink;
