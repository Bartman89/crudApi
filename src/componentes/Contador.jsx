import React, {useState, useEffect} from 'react'


const Contador = () => {

    const [contador, setContador] = useState(0)


    

  return (
    
   
    <>
    <p>Valor actual del contador:{contador} </p>
    <button onClick={()=> setContador(contador + 1 )}>Aumentar</button>
    <button onClick={()=> setContador(contador - 1 )}>Disminuir</button>
    <button onClick={()=> setContador(0 )}>Restablecer</button>

   
    </>
  )
}





export default Contador