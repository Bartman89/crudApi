import React, { useEffect, useState } from 'react'

function Botones({setActual, anteriores, siguientes}) {
  
    const [deshabilitado, setDeshabilitado] = useState(true)
  
    useEffect(() => {
      if(anteriores ){
        setDeshabilitado(false)


      }

      else{
        setDeshabilitado(true)
      }
    }, [anteriores])
    
  
    return (
    <>
    <button disabled={deshabilitado} onClick={()=>{setActual(anteriores)}}>Anteriores</button>
    <button onClick={()=>{setActual(siguientes)}}>Siguientes</button>
    </>
  )
}

export default Botones