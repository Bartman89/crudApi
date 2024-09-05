import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


function ListaPokemones({pokemones}) {
  return (
    <>
    <br />
    <ListGroup as="ol" numbered>
    {pokemones === null ? <ListGroup.Item as="li">No hay Pokemones</ListGroup.Item> : pokemones.map((pokemon,index)=>{return (<ListGroup.Item key={index} as="li">{pokemon.name}</ListGroup.Item>)}) }    
    
    </ListGroup>
  </>
  )
}

export default ListaPokemones