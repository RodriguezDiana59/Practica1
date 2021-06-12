import React from 'react'

function Fetchpokemon() {
    const [pokemones, setPokemones] = React.useState([]); 

    const obtenerPokemones = async () => {  
        console.log('hola mundo')
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await res.json()
        console.log(datos)
        setPokemones(datos.results)
    }
    return (
        <div> 
            <table className='table table-dark'>
                <thead>
                <tr>
                    <th>Nombre</th>
                    <th>URL</th>
                </tr>
                </thead>
                <tbody>
                {      
                    pokemones.map((pokemon, index) => (
                        <tr key={index}>   
                            <td>{pokemon.name}</td>
                            <td><a href={pokemon.url}>pagina del pokemon</a></td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            <button
                onClick={() => obtenerPokemones ()}>Obtener Pokemones</button>
        </div>
    )
}

export default Fetchpokemon
