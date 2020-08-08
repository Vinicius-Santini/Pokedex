const ApiService = {

    PokemonsListener : () =>{
        return fetch('https://pokeapi.co/api/v2/pokemon/')
        .then(res => ApiService.ErrorHandler(res))
        .then(res => res.json());
    },

    ErrorHandler : res =>{
        if(!res.ok){
            
            throw Error(res.responseText);
        }
        return res;
    }

}
export default ApiService;