import Image from "next/image";
import { ButtondmPref } from "./style";

export default function ButtonDarkMode({ setDarkMode, darkMode }: any) {
  function HadleDarkMode() {
    if (darkMode == false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  return (
    <ButtondmPref onClick={HadleDarkMode}>
      {darkMode ? (
        <Image
          src={"/images/light.png"}
          width="44"
          height="24"
          alt="icon dark mode"
        />
      ) : (
        <Image
          src={"/images/moon.png"}
          width="44"
          height="24"
          alt="icon dark mode"
        />
      )}
    </ButtondmPref>
  );
}
