import header from "../styles/Header.module.css";
import button from "../styles/Button.module.css";
import useAnimateOnScreen from "../hooks/useAnimateOnScreen";
import { LegacyRef } from "react";

export const Header = () => {
  const [presentationRef, presentationAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
  });

  const [nameRef, nameAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 50,
  });

  const [subtitleRef, subtitleAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 100,
  });

  const [aboutRef, aboutAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 150,
  });

  const [buttonRef, buttonAnimation] = useAnimateOnScreen({
    animationClass: "fadeInFromLeft",
    delay: 200,
  });

  return (
    <header className={header.container}>
      <h2
        className={`${header.presentation} ${presentationAnimation}`}
        ref={presentationRef}
      >
        Hi, my name is
      </h2>
      <h1 className={`${header.name} ${nameAnimation}`} ref={nameRef}>
        Rodrigo López
      </h1>
      <h2
        className={`${header.subtitle} ${subtitleAnimation}`}
        ref={subtitleRef}
      >
        a Frontend Developer
      </h2>
      <h2 className={`${header.about} ${aboutAnimation}`} ref={aboutRef}>
        based in El Salvador, I started this journey 2 years ago, motivated by
        the passion that I&apos;ve always felt about web, mobile applications
        and transforming ideas into reality. I specialize in{" "}
        <span className={header.presentation}>React</span>, building exceptional
        digital experiences.
      </h2>
      <button
        className={`${button.btn} ${buttonAnimation}`}
        ref={buttonRef as LegacyRef<HTMLButtonElement>}
      >
        Download resume
      </button>
    </header>
  );
};

export default Header;
