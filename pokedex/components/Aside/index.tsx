import Image from "next/image";
import Search from "../Search";
import { AsideDashboard } from "./style";

export default function Aside() {
  return (
    <AsideDashboard>
      <div>
        <Image
          src="/images/logo.webp"
          width="210"
          height="50"
          alt="Logo do Pokedex"
        />
        <p>
          Everything you wanted to know about your favorite pocket monsters!
        </p>
        <Search />
      </div>
    </AsideDashboard>
  );
}
