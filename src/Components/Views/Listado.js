import React from 'react'

//Components
import Gasto from '../Reutilizable/Gasto'

function Listado({gastos}){

    return(
        <div>
            {gastos.map(gastos => (
                <Gasto
                    key={gastos.id}
                    gastos={gastos}
                />
            ))}
        </div>
    )
}

export default Listado