import { DashboardBodyLight, DashboardBodyDark } from "../components/Dasboard";
import { AsideDashboard } from "../components/Aside/style";
import Image from "next/image";
import Search from "../components/Search";
import { useState } from "react";
import DashboardList from "../components/Main";
import Head from "next/head";

export async function getStaticProps() {
  const dataPokemons = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=120&offset=0"
  );
  const dataPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`);

  const pokemon = await dataPokemon.json();
  const pokemons = await dataPokemons.json();

  return {
    props: { pokemons, pokemon },
  };
}

export default function Dashboard({ pokemons, pokemon }: any) {
  const [poke, setPoke] = useState("");
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const allPokemons = pokemons.results;

  const includesPoke = allPokemons.map((item: any) => {
    if (item.name.includes(search) == true) {
      return item.name;
    }
  });

  const filteredPoke = includesPoke.filter(
    (pocket: any) => pocket !== undefined
  );

  return (
    <>
      {darkMode ? (
        <DashboardBodyDark>
          <Head>
            <title>Dashboard</title>
            <link
              rel="icon"
              href="https://img1.gratispng.com/20171220/kqw/pokeball-png-5a3a4a7e247ce7.9167778215137695981495.jpg"
            />
          </Head>
          <AsideDashboard>
            <div>
              <Image
                src="/images/logo.webp"
                width="210"
                height="50"
                alt="Logo do Pokedex"
              />
              <p>
                Everything you wanted to know about your favorite pocket
                monsters!
              </p>
              <Search setSearch={setSearch}></Search>
            </div>
            <ul>
              {filteredPoke.map((pokemon: any) => (
                <li key={pokemon} onClick={() => setPoke(pokemon)}>
                  {pokemon}
                </li>
              ))}
            </ul>
          </AsideDashboard>

          <DashboardList
            pokemon={pokemon}
            poke={poke}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          ></DashboardList>
        </DashboardBodyDark>
      ) : (
        <DashboardBodyLight>
          <Head>
            <title>Dashboard</title>
            <link
              rel="icon"
              href="https://img1.gratispng.com/20171220/kqw/pokeball-png-5a3a4a7e247ce7.9167778215137695981495.jpg"
            />
          </Head>
          <AsideDashboard>
            <div>
              <Image
                src="/images/logo.webp"
                width="210"
                height="50"
                alt="Logo do Pokedex"
              />
              <p>
                Everything you wanted to know about your favorite pocket
                monsters!
              </p>
              <Search setSearch={setSearch}></Search>
            </div>
            <ul>
              {filteredPoke.map((pokemon: any) => (
                <li key={pokemon} onClick={() => setPoke(pokemon)}>
                  {pokemon}
                </li>
              ))}
            </ul>
          </AsideDashboard>
          <DashboardList
            pokemon={pokemon}
            poke={poke}
            setDarkMode={setDarkMode}
            darkMode={darkMode}
          ></DashboardList>
        </DashboardBodyLight>
      )}
    </>
  );
}
