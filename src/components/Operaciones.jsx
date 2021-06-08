import React, { Fragment } from 'react'

function Operaciones() {
    const [resultado, setResultado] = React.useState(0)    
    const [valor1, setValor1]  = React.useState(0)
    const [valor2, setValor2]  = React.useState(0)
    const sumar = () => {
        console.log("Clic")
        setResultado("");      
        setResultado(parseInt(valor1) + parseInt(valor2));        
    }
    const restar = () => {
        console.log("Clic")
        setResultado("");      
        setResultado(parseInt(valor1) - parseInt(valor2));        
    }
    const multi = () => {
        console.log("Clic")
        setResultado("");      
        setResultado(parseInt(valor1) * parseInt(valor2));        
    }
    const divicion = () => {
        console.log("Clic")
        setResultado("");      
        setResultado(parseInt(valor1) / parseInt(valor2));        
    }    
    const exp = () => {
        console.log("Clic")
        setResultado("");      
        setResultado(parseInt(Math.pow(valor1, valor2)));        
    }
    return (
        <Fragment>
            
            <div>
                <br />
                <input type="number" placeholder="Primer valor" onChange={(e)=>setValor1(e.target.value)}/><h1>   </h1>
                <input type="number" placeholder="Segundo valorv" onChange={(e)=>setValor2(e.target.value)}/><h1>   </h1>
                
                <input type="number" placeholder="Resultado" value={resultado}/>
            </div>
                <br></br>
            <div>
                <button onClick={ () =>sumar () }>+</button>
                <button onClick={ () =>restar () }>-</button>
                <button onClick={ () =>multi () }>*</button>
                <button onClick={ () =>divicion () }>/</button>
                <button onClick={ () =>exp () }>Exponente</button>
                
            </div>
        </Fragment>
    )
}

export default Operaciones