import React from 'react'

//Components
import Gasto from '../Reutilizable/Gasto'

function Listado({gastos}){

    return(
        <div>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id}
                    gasto={gasto}
                />
            ))}
        </div>
    )
}

export default Listado