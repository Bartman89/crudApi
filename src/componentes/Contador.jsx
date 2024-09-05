import React, { useState, useEffect } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <>
     <div>
      
        
      <p className="m-1">Valor actual del contador:{contador} </p>
      
      <button className="btn btn-primary m-1" onClick={() => setContador(contador + 1)}>Aumentar</button>
      <button className="btn btn-primary m-1" onClick={() => setContador(contador - 1)}>Disminuir</button>
      <button className="btn btn-primary m-1" onClick={() => setContador(0)}>Restablecer</button>
      </div>
      
    </>
  );
};

export default Contador;
