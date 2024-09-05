import { Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'

export default function BotonesPokemon({setActual, siguientes, anteriores}) {

  const [deshabilitado, setDeshabilitado] = useState(true)  
  
  useEffect(() => {
    
    if (anteriores){
        setDeshabilitado(false)

    }

    else{
        setDeshabilitado(true)
    }
  }, [anteriores])
  
  
  return (
    <>
    <div className='container '>
    <button disabled={deshabilitado} onClick={()=> setActual(anteriores)}  className='btn btn-primary m-1'>Anteriores</button>
    <button onClick={()=>setActual(siguientes)}  className='btn btn-primary m-1'>Siguientes</button>
    </div>
    </>
  )
}
