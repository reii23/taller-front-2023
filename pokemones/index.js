
const pokemones = (async () => {
  try{
    const URL = "https://pokeapi.co/api/v2/pokemon/mewtwo";
    const dataRaw = await fetch(URL)  // promise: debemos esperar que se resuelva
    const data = await dataRaw.json() // método .json
    console.log("data:",data.name);   // nombre del pokemon, si le quitamos el .name recibimos toda la data
  }catch (error){
    console.error(error); // si alguna de las promesas falla, se va al catch
  }finally {
    console.log("Esto se ejecuta siempre"); 
  }
})();
// función auto-invocada IIFE 
