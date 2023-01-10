import Image from "next/image";
import { useState, useEffect } from "react";
import ButtonDarkMode from "../DarkMode";
import { Select } from "../Layouts/select";
import { DashboardMain, DashboardMainSelect } from "./style";

export default function DashboardList({
  pokemon,
  poke,
  setDarkMode,
  darkMode,
}: any) {
  const [actualPoke, setactualPoke] = useState({
    name: "",
    weight: 6,
    height: 85,
    id: 3,
    sprites: {
      front_shiny: "",
    },
    abilities: [],
  });

  async function request() {
    const dataPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${poke}`
    );

    const pokedeActual = await dataPokemon.json();
    localStorage.setItem("@actualPokemon", JSON.stringify(pokedeActual));
  }
  request();

  setTimeout(() => {
    const pokedex = JSON.parse(localStorage.getItem("@actualPokemon") || "{}");
    const types = pokedex.types;

    if (pokedex.name == actualPoke.name) {
    } else {
      setactualPoke(pokedex);
    }
  }, 100);

  if (actualPoke.name === undefined) {
    return (
      <DashboardMainSelect>
        <Select>
          <Image
            src={"/images/pokemon.png"}
            height="200"
            width="240"
            alt="pikachú"
          ></Image>
          <h1>Selecione um pokemón!</h1>
        </Select>
      </DashboardMainSelect>
    );
  } else {
    return (
      <DashboardMain>
        <section>
          <div>
            <h1>
              # {actualPoke.id} {actualPoke.name}
            </h1>
            <div className="img-conteiner">
              <img
                className="avatar"
                src={actualPoke.sprites.front_shiny}
                alt={`Avatar do ${actualPoke.name}`}
              />
            </div>
          </div>
          <article>
            <span>{`Altura: ${actualPoke.height}m`}</span>
            <span className="wiedht">{`Peso: ${actualPoke.weight}Kg`}</span>
          </article>
        </section>
        <ButtonDarkMode
          setDarkMode={setDarkMode}
          darkMode={darkMode}
        ></ButtonDarkMode>
      </DashboardMain>
    );
  }
}
