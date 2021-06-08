import React, {Fragment} from 'react'

function Eventos() {
    const [saludo, setSaludo] = React.useState("Holda mundo")
    const cambiarEstado = () => {
        console.log("Diste click")
        setSaludo("kiubo raza")
    }
    return (
        <Fragment>
            { saludo }
            <button onClick={() => cambiarEstado()}>Click</button> 
        </Fragment>
    )
}

export default Eventos
