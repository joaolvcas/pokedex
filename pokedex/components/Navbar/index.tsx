import Image from "next/image";
import { Nav } from "./styles";

export default function Navbar() {
  return (
    <Nav>
      <Image
        src="/images/logo.webp"
        width="200"
        height="42"
        alt="Logo Pokedex"
      />
      <Image
        src="/images/settings.svg"
        width="60"
        height="25"
        alt="Configurações"
      />
    </Nav>
  );
}
