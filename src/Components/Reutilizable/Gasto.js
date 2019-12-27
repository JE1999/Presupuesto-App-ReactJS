import React from 'react'

const Gasto = ({gasto}) =>(

    <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {gasto.gastos}
            <span className="badge badge-success badge-pill">${gasto.cantidad}</span>
        </li>
    </ul>

)

export default Gasto