import { useState, useEffect } from "react";

const usePokemon = (url) => {
  const [pokemones, setPokemones] = useState([]);
  const [anterior, setAnterior] = useState(null);
  const [siguiente, setSiguiente] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    async function peticion() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setPokemones(data.results);
        setAnterior(data.previous);
        setSiguiente(data.next);
        setLoading(false);
      } catch (error) {
        console.error("New error: ", error);
      } finally {
        console.log("Operacion Concluida");
      }
    }

    peticion();
  }, [url]);

  return { pokemones, loading, anterior, siguiente };
};

export default usePokemon;
