const ApiService = {
  PokemonsListener: (page) => {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page - 1) * 10}`
    )
      .then((res) => ApiService.ErrorHandler(res))
      .then((res) => res.json());
  },

  GetPokemon: (id) => {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((res) => ApiService.ErrorHandler(res))
      .then((res) => res.json());
  },

  ErrorHandler: (res) => {
    if (!res.ok) {
      throw Error(res.responseText);
    }
    return res;
  },
};
export default ApiService;
