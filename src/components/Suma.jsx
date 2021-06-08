import React from 'react'

function Suma() {
    const [resultado, setResultado] = React.useState(0)
    const [valor1, setValor1] = React.useState(0)
    const [valor2, setValor2] = React.useState(0)
    const sumar = () => {
        console.log("Clic")
        setResultado(parseInt(valor1) + parseInt(valor2));
    }
    return (
        <div>
            < input type="number" placeholder="Primer valor" onChange={(e)=>setValor1(e.target.value)}/>
            < input type="number" placeholder="Segundo valor" onChange={(e)=>setValor2(e.target.value)}/>
            < input type="number" placeholder="resultado" value={resultado}/>
            <button onClick={ () =>sumar () }>Sumar</button>

        </div>
    )
}

export default Suma 