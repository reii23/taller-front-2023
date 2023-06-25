// consumo de la API, para obtener los pokemones
async function obtenerPokemones() {
    try {
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
        const datos = await respuesta.json();
        return datos.results;
    } catch (error) {
        console.error('Error:', error);
    }
}

// funcion para mostrar las tarjetas
async function mostrarTarjetasPokemon() {
    const Pokemones = await obtenerPokemones();
    const contenedorPokemon = document.getElementById('pokemonContainer');
    // uso del metodo forEach para obtener los datos y crear las tarjetas
    Pokemones.forEach(async (pokemon) => {
        const datosPokemon = await obtenerDatosPokemon(pokemon.url);
        const tarjetaPokemon = crearTarjetaPokemon(datosPokemon);
        contenedorPokemon.appendChild(tarjetaPokemon);
    });
}

// funcíon con uso de try / catch para obtener los datos y entregar un error en caso de que no se obtengan los datos // 
async function obtenerDatosPokemon(url) {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error('Error:', error); // manejo de errores //
    }
}

// se crean variables para la tarjeta, el nombre del pokemon y la imágen del pokemon //
function crearTarjetaPokemon(pokemon) {
    const tarjeta = document.createElement('div');
    const nombre = document.createElement('h2');
    const imagen = document.createElement('img');

    tarjeta.classList.add('tarjeta-pokemon');
    nombre.textContent = pokemon.name;
    imagen.src = pokemon.sprites.front_default;

    tarjeta.appendChild(nombre);
    tarjeta.appendChild(imagen);
    return tarjeta;
}

mostrarTarjetasPokemon();
