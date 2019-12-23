import React from 'react'

const Gasto = ({gastos}) =>(
    <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {gastos.nombreGasto}
            <span className="badge badge-primary badge-pill">{gastos.cantidadGasto}</span>
        </li>
    </ul>
)

export default Gasto