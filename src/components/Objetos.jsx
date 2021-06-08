import React, {Fragment} from 'react'

function Objetos() {
    const cel = [
        {
            Id:1,
            Tipo:"Iphone",
            Capacidad:"128Gb",
            Color:"Rosa",
            informacion:{
                Modelo:"12 pro max",
                Marca:"Apple",
                Compania:"Telcel",
            } ,
            
        },
        {
            Id:2,
            Tipo:"Samsumg",
            Capacidad:"32Gb",
            Color:"Negro",
            infomacion:{
                Modelo:"Galaxy A72",
                Marca:"Android",
                Compania:"AT&T",
            } ,
           
        },
        {
            Id:3,
            Tipo:"Iphone",
            Capacidad:"64Gb",
            Color:"Gris",
            informacion:{
                Modelo:"XR",
                Marca:"Apple",
                Compania:"TelefoniaX",
            } 
            
        }
    ]    
    return (
        <Fragment>
                     {
                cel.map((celulares) => (
                    <div key={celulares.Id}>
                        <h2>{celulares.Tipo}</h2>
                        <h3>{celulares.Capacidad}</h3>
                        <h3>{celulares.Color}</h3>  
                    </div>
                ))           
            
            }

        </Fragment>
    )
}

export default Objetos
