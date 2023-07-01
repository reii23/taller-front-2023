// se usa la extensión mjs, utiliza ES
const pokemones = (async () => {
    try{
      const URL = "https://pokeapi.co/api/v2/pokemon/mewtwo";
      const dataRaw = await axios(URL)  // promise: debemos esperar que se resuelva
      // const data = await dataRaw.json() // método .json
      console.log("data:",dataRaw.data.name);   // nombre del pokemon, si le quitamos el .name recibimos toda la data
    // dataRaw.date.name: entrega mewtwo
    // data.Raw.name entrega todos los nombres
    // (se puede ir jugando con la extensión de dataRaw)
    }catch (error){
      console.error("El error en consumir la PokeAPI es: " ,error); // si alguna de las promesas falla, se va al catch
    }finally {
      console.log("Esto se ejecuta siempre"); 
    }
  })();
  // función auto-invocada IIFE 

  
  // 200: OK
  // tipos de Errores
  // 401-402-403-404....: error de cliente (navegador)
  // 500..: errores de servidor
  // si tenemos un error 400 y algo generalmente es un error del desarrollador

  const nombrePokemon = document.getElementById("nombrePokemon");
  console.log("nombrePokemon",nombrePokemon);

  const pokemon = pokemones.then((poke) => {
    const pokeNombre = poke;
    nombrePokemon.textContent = pokeNombre;
  })
  .catch((error) =>{
    console.error("El error en mostrar el texto en el nodo es",error);
  });

  // no es necesario que la funcion pokemones tenga parentesis (); ya que es una función autoinvocada
  console.log("pokemon",pokemon);

  // si se quiere volver como promesa, se debe tratar nuevamente como promesa, sino, dirá que