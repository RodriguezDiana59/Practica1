import React, {Fragment} from 'react'

const saludo = "Hola Diana";
const numero = 5;
const Variables = () => {
    return (
        <Fragment>
            <h1>{saludo}</h1>
            <h6>La suma de los numeros es: {numero+numero}</h6>
        </Fragment>
    )
}

export default Variables
