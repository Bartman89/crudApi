export const helpFetch= ()=>{

  const URL ="http://localhost:3004"

  const customFetch = (endpoint,options={})=>{

    options.method = options.method || "GET"

    options.headers = {
      "content-type":"application/json"
    }

    if(options.body){
      options.body = JSON.stringify(options.body)
    }

    return fetch(`${URL}/${endpoint}`, options)
     .then (response => {
      
       return response.ok ?
       response.json() :
       Promise.reject({
        
       }
        
       )
       
       
     })

     .catch(error=>{
      return {
        error:true,
        statusText: "Error: No se logro la peticion"
      }
     })


  }

   const get = (endpoint) => {



     return customFetch(endpoint)
   }

   const post = (endpoint,options)=>{
    options.method = "POST"

    return customFetch(endpoint, options)
   }


   const put =(endpoint,options,id)=>{
    options.method ="PUT"

    return customFetch(`${endpoint}/${id}`, options)
   }

   const eliminar = (endpoint, options, id)=>{

    
    
    return customFetch(`${endpoint}/${id}`, options)

   }

   return {get, post, put, eliminar}


}