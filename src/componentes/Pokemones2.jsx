import React, { useState, useEffect } from "react";
import usePokemon2 from "../hooks/usePokemon2";
import Botones from "./Botones";
import { NavbarCollapse } from "react-bootstrap";

const Pokemones2 = () => {
  const [actual, setActual] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );

  const { pokemones, anteriores, siguientes, loading } = usePokemon2(actual);

  return loading ? (
    <p>Cargando Lista..</p>
  ) : (
    <>
      <ul>
        {pokemones.map((pokemon, index) => {
          return <li key={index}>{pokemon.name}</li>;
        })}
      </ul>
      <Botones
        anteriores={anteriores}
        siguientes={siguientes}
        setActual={setActual}
      ></Botones>
    </>
  );
};

export default Pokemones2;
