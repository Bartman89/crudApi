export const helpFetch =  (URL)=>{



return fetch (URL)
 .then (response =>{
    return response.ok ? 
    response.json() :
    Promise.reject()

 })

 .catch(error =>{
    return{
        error:true,
        statusText:"Error: NG"
    }
 })

}


