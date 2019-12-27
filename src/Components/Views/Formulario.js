import React, { useState } from 'react'
import ShortId from 'shortid'

//npm install --save shortid

//Components
import Error from '../Reutilizable/Error'

function Formulario({setGasto, setCrearGasto}){

    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidadGasto, setCantidadGasto] = useState("") //0
    const [error, setError] = useState(false)

    const handleSubmit = e =>{
        e.preventDefault()
        
        if(nombreGasto === "" || cantidadGasto <=0 || isNaN (cantidadGasto) ){
            setError(true)
            return
        }

        const gasto = {
            gastos: nombreGasto,
            cantidad: cantidadGasto,
            id: ShortId.generate()
        }

        setGasto(gasto)
        setCrearGasto(true)

        setError(false)

        setNombreGasto('')
        setCantidadGasto('')

    }


    return(
        <div>

            <center><h2>Agrega tus gastos</h2></center>

            {
                error ? 
                    <Error
                        mensaje="Ambos campos son obligatorios"
                    />
                    
                    : null
            }
            
            <form
                onSubmit={handleSubmit}
            >

                <div className="form-group">
                    <label>Nombre del gasto:</label>
                    <input 
                        type="text" 
                        className="form-control"
                        name="gastos"
                        onChange={e => setNombreGasto(e.target.value)}
                        value={nombreGasto}
                    />
                </div>

                <div className="form-group">
                    <label>Cantidad del gasto:</label>
                    <input 
                        type="number" 
                        className="form-control"
                        name="cantidad"
                        onChange={e => setCantidadGasto( parseInt(e.target.value), 10) }
                        value={cantidadGasto}
                    />
                </div>

                <button type="submit" className="btn btn-success btn-block">Añadir</button>
                
            </form>

        </div>
    )
}

export default Formulario