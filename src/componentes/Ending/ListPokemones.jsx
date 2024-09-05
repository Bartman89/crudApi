import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import BotonesPokemon from './BotonesPokemon'



function ListPokemones({pokemones, anteriores, siguientes, setActual}) {
  return (
    <>
    <div className='container'>
    <ListGroup>
     {pokemones.map ((pokemon,index)=>{return (
    <ListGroup.Item className='text-center' key={index}>{pokemon.name}</ListGroup.Item>
)})}   
  </ListGroup>
    
  </div>
  <BotonesPokemon anteriores={anteriores} siguientes={siguientes} setActual={setActual}></BotonesPokemon>
  </>
  )
}

export default ListPokemones