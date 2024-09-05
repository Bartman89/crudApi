import React, { useEffect, useState } from 'react'

function BotonesContador({ setContador, contador}) {

  const [message, setMessage] = useState(null)

  useEffect(() => {
    
    if (contador === 0){
        setDeshabilitado(true)
    }

    if(contador >= 10){
        setMessage("Limite de venta de tickets alcanzado.")
    }

    else{ setMessage (null)}

  }, [contador])
    

  const incrementar = ()=>{

    setContador(contador += 1)

    setDeshabilitado(false)
  }  

  const decrementar = ()=>{
    
   
    setContador( contador -= 1)

  }

  const [deshabilitado, setDeshabilitado] = useState(true)

  


  return (
    <>
    <div className='container'>
        
        <button disabled={deshabilitado}  onClick={decrementar} className='btn btn-primary m-1' >Decrementar</button>
        <button onClick={incrementar} className='btn btn-primary m-1' >Incrementar</button>
        <br />
        <br />
        {message &&  <h3>{message}</h3>}    
    </div>
    </>
  )
}

export default BotonesContador