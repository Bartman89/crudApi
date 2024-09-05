export const helpFetchCrudApi = ()=>{

    const URL = "https://web-production-ecb9.up.railway.app"

    

    const customFetch = (endpoint, options={})=>{

        options.method = options.method ||  "GET"

        options.headers = {
            "content-type": "application/json"
        }

        if (options.body){
            options.body = JSON.stringify(options.body)
        }

        return fetch (`${URL}/${endpoint}`, options)
            .then (response =>{
                console.log(response)
                return response.ok ?
                response.json():
                Promise.reject()

            })

            .catch(error =>{
                return {
                    error:true,
                    statusText:"Error: no se logro la peticion"
                }
            })

    }

    const get = (endpoint)=>{return customFetch(endpoint)}

    const post = (endpoint, options )=>{
        return customFetch(endpoint, options)
    }

    const put = (endpoint,options,id) =>{
        return customFetch(`${endpoint}/${id}`, options)
    }

    const eliminarEquipo = (endpoint, options , id)=>{
        return customFetch (`${endpoint}/${id}`, options, id)
    }

    return {get, post, put, eliminarEquipo}
}