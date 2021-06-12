import React from 'react'

function Fetchpract() {
    const [pokemones, setPokemones] = React.useState([]); 

    const obtenerPokemones = async () => {  
        console.log('hola mundo')
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/3/')
        const datos = await res.json()
        console.log(datos.abilities)
        setPokemones(datos.abilities)
    }
    return (
        <div> 
            <table className='table table-dark'>
                <thead>
                <tr>
                    <th>Nombre</th>
                    
                </tr>
                </thead>
                <tbody>
                {      
                    pokemones.map((pokemon, index) => (
                        <tr key={index}>   
                            <td>{pokemon.ability.name}</td>
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

export default Fetchpract
