
import React, { useEffect, useState} from 'react'
import Button from 'react-bootstrap/Button';

const Botones = ({anteriores, siguientes, setActual}) => {

  const [habilitado, setHabilitado] = useState(true)

  function habilitarAnteriores (){
    if(anteriores !== null ){
      setHabilitado(false)

    }

    else{
      setHabilitado(true)
    }
  }

  useEffect(() => {
    habilitarAnteriores()
  }, [anteriores])
  

  return (
    <>
    <Button disabled={habilitado} onClick={()=>{anteriores !== null && setActual(anteriores)}} variant="primary" style={{margin:5}}>Anteriores</Button>
    <Button onClick={()=>{siguientes !== null && setActual(siguientes)}} variant="primary">Siguientes</Button>
  </>
  )
}

export default Botones