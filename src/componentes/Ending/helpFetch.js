export const helpFetchPokemon = (URL)=>{

  return fetch(URL)
   .then (response =>{
     return response.json()

   })

   .catch(error =>{
    return {
      error: true,
      statusText:"Error : No se logro la peticion"
    }
    
   })

}