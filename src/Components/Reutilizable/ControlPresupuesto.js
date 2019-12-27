import React from 'react'

//Alerta
import {HelperAlerta} from '../Reutilizable/Helper'
import Error from '../Reutilizable/Error'

const ControlPresupuesto = ({presupuesto, restante, error}) =>{

    return(
        <div>
            <center>
                <h2>Listado</h2>
                {error 
                    ? <Error mensaje="No tienes presupuesto suficiente"/> 
                    : null
                }
                
                <h5 className="text-success p-0 m-0">
                Presupuesto: <span className="text-muted">${presupuesto}</span>
                </h5>
            </center>

                <span className={HelperAlerta(presupuesto, restante)}>Restante: ${restante}</span>
        </div>
    )
}

export default ControlPresupuesto