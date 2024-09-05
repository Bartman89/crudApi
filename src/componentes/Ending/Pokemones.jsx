import React, { useEffect, useState } from 'react'
import {helpFetchPokemon} from './helpFetch'
import Loader from './Loader'
import ListPokemones from './ListPokemones'
import MessageErrorPokemon from './MessageErrorPokemon'


function Pokemones() {

 


  const [pokemones, setPokemones] = useState(null)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(null)
  const [actual, setActual] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
  const [anteriores, setAnteriores] = useState(null)
  const [siguientes, setSiguientes] = useState(null)


  useEffect(() => {
    setLoading(true)
    helpFetchPokemon(actual)
     .then (response =>{
       if (!response.error){
        setPokemones(response.results)
        
        setMessage(null)
        setAnteriores(response.previous)
        setSiguientes(response.next)
        

       }

       else{

        setMessage(response.statusText)
        setPokemones(null)

       }

     })
     setLoading(false)
  }, [actual])
  

  return (
    <>
    {loading ? <Loader></Loader>  :  message  ? 
     <MessageErrorPokemon message={message}></MessageErrorPokemon> : pokemones && <ListPokemones anteriores={anteriores} siguientes={siguientes} pokemones={pokemones} setActual={setActual}></ListPokemones> }
    </>
  )
}

export default Pokemones