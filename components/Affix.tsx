import { ArrowUp } from "tabler-icons-react";
import { useOnScroll } from "../hooks/useOnScroll";
import style from "../styles/Affix.module.css";

export const Affix = () => {
  const { showFixed } = useOnScroll({ margin: 0 });

  return (
    <a href={!showFixed ? "#skills" : "#top"}>
      <div
        className={`${style.affix} ${showFixed ? style.visible : style.hidden}`}
      >
        <ArrowUp
          color="black"
          strokeWidth={2}
          className={!showFixed ? style.arrowdown : style.arrow}
        />
      </div>
    </a>
  );
};

export default Affix;
