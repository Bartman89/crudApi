import React, {useEffect, useState} from 'react'

const usePokemon2 = (url) => {

  const [pokemones, setPokemones] = useState([])
  const [loading, setLoading] = useState(null)
  const [anteriores, setAnteriores] = useState(null)
  const [siguientes, setSiguientes] = useState(null)
  const [habilidades, setHabilidades] = useState(null)

  useEffect(() => {
    setLoading(true)

    async function peticion (){
      const response = await fetch(url)
      const data = await response.json()
      
      setPokemones(data.results)
      setAnteriores(data.previous)
      setSiguientes(data.next)
      setLoading(false)
      
      
      
      
    }
    
    peticion()
  }, [url])
  

  return (
    {pokemones,anteriores,siguientes,loading}
  )
}

export default usePokemon2