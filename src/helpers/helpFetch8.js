 export async function helpFetch (){

    const URL ="https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"



    try{
        const response = fetch(URL)

        const data = response.json()

        return data

    }

    catch{

        return {
            error:true,
            statusText:"ERROR NG"
        }

    }

    
 }