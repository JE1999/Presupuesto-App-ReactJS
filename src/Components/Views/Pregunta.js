import React, { useState } from 'react'

//Components
import Error from '../Reutilizable/Error'

function Pregunta({setPresupuesto, setPreguntaPresupuesto}){

    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault()

        if(cantidad <=0 || isNaN (cantidad) ){
            setError(true)
            return
        }

        setError(false)
        setPresupuesto(cantidad)
        setPreguntaPresupuesto(false)
    }

    return(
        <div>

            {error ? 
                <Error
                    mensaje="Digite una cantidad"
                />
                : null
            }

            <form
                onSubmit={handleSubmit}
            >

                <div className="form-group">
                    <label>Presupuesto:</label>
                    <input 
                        type="number" 
                        className="form-control"
                        name="presupuesto"
                        onChange={e => setCantidad( parseInt(e.target.value, 10) ) }
                    />
                </div>

                <button type="submit" className="btn btn-success btn-block">Enviar</button>
                
            </form>
        </div>
    )
}

export default Pregunta