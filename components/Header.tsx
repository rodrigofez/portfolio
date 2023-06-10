import header from "../styles/Header.module.css";
import button from "../styles/Button.module.css";
import useAnimateOnScreen from "../hooks/useAnimateOnScreen";
import { LegacyRef } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const Header = () => {
  const { t } = useTranslation("header");

  const [presentationRef, presentationAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
  });

  const [nameRef, nameAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 25,
  });

  const [subtitleRef, subtitleAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 50,
  });

  const [aboutRef, aboutAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 75,
  });

  const [buttonRef, buttonAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 100,
  });

  return (
    <header className={header.container}>
      <h2
        className={`${header.presentation} ${presentationAnimation}`}
        ref={presentationRef}
      >
        {t("presentation")}
      </h2>
      <h1 className={`${header.name} ${nameAnimation}`} ref={nameRef}>
        {t("name")}
      </h1>
      <h2
        className={`${header.subtitle} ${subtitleAnimation}`}
        ref={subtitleRef}
      >
        {t("subtitle")}
      </h2>
      <h2 className={`${header.about} ${aboutAnimation}`} ref={aboutRef}>
        {t("preabout")}
        <span className={header.buzzword}>{t("buzzword")}</span>
        {t("postabout")}
      </h2>
    </header>
  );
};

export default Header;
