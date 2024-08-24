// useRef es un hook que nos ayuda a hacer referencia a algun elemento de nuestro DOM

import React, {useRef} from 'react'

const Referencia = () => {

    const inputRef = useRef()

    console.log(inputRef)

    const handleFocus = ()=>{
        const input = document.getElementById("input-focus")
        input.focus()
    }

  return (
    <>
    <h1>Referencia</h1>
    <input type='text' ref={inputRef}></input>
    <button onClick={()=> inputRef.current.focus()}>focus</button>
    <input type="text" id='input-focus' />
    <button onClick={handleFocus}>Focus 2</button>
    </>
    

  )
}

export default Referencia