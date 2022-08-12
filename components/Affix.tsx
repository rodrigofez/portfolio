import { ArrowUp } from "tabler-icons-react";
import { useOnScroll } from "../hooks/useOnScroll";
import style from "../styles/Affix.module.css";

export const Affix = () => {
  const { showFixed } = useOnScroll({ margin: 200 });

  return (
    <a href="#top">
      <div
        className={`${style.affix} ${showFixed ? style.visible : style.hidden}`}
      >
        <ArrowUp color="black" strokeWidth={2} />
      </div>
    </a>
  );
};

export default Affix;
