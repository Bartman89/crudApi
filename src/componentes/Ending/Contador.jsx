import React, { useState } from 'react'

import BotonesContador from './BotonesContador'

function Contador() {
  
    const [contador, setContador] = useState(0)

    
  
    return (


    <>
    <div className='container'>
    <h3 >El valor de contador es :  {contador}</h3>
    <BotonesContador contador={contador} setContador={setContador} ></BotonesContador>

    </div>
    </>
  )
}

export default Contador