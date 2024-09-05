import React, { useEffect, useState } from 'react'
import {helpFetch} from './helpFetch'

import ListaPokemones from './ListaPokemones'
import Botones from './Botones'

function Pokemones() {

    
    
    const [pokemones, setPokemones] = useState(null)

    const [anteriores, setAnteriores] = useState(null)
    
    const [siguientes, setSiguientes] = useState(null)

    const [actual, setActual] = useState("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")


    useEffect(() => {
      
        helpFetch(actual)
         .then (response =>{
            if(!response.error){
                setPokemones(response.results)
                setSiguientes(response.next)
                setAnteriores(response.previous)
                
            }

            else{
                console.log("NG")
            }
         })

    }, [actual])
    
 

  return (
    <>
    <ListaPokemones pokemones={pokemones}></ListaPokemones>
    <Botones setActual={setActual} anteriores={anteriores} siguientes={siguientes}></Botones>
    </>
  )
}

export default Pokemones