import React, { useState, useEffect } from 'react';

//Components layout
import Header from './Components/Layout/Header'

//Components views
import Pregunta from './Components/Views/Pregunta'
import Formulario from './Components/Views/Formulario'
import Listado from './Components/Views/Listado'

//Reutilizable
import ControlPresupuesto from './Components/Reutilizable/ControlPresupuesto'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true)
  const [crearGasto, setCrearGasto] = useState(false)
  const [gasto, setGasto] = useState({})
  const [gastos, setGastos] = useState([])
  const [error, setError] = useState(false)


  useEffect(() => {
    if(crearGasto){

      if (restante < gasto.cantidad) {
        setError(true)
        return
      }
      
      setError(false)

      const listado = [...gastos, gasto]
      setGastos(listado)

      const PresupuestoRestante = restante - gasto.cantidad
      setRestante(PresupuestoRestante)

      setCrearGasto(false)
    }
  }, [crearGasto, gasto, gastos, restante])

  return (
    <div>
      <Header/>
      <div className="container bg-white border my-3 p-3">
        <div className="row">
          <div className="col-sm-12">
            { preguntaPresupuesto
              ?
                <Pregunta
                  setPresupuesto={setPresupuesto}
                  setPreguntaPresupuesto={setPreguntaPresupuesto}
                  setRestante={setRestante}
                />
              :
                (
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <Formulario
                        setGasto={setGasto}
                        setCrearGasto={setCrearGasto}
                      />
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        restante={restante}
                        error={error}
                      />

                      <Listado
                        gastos={gastos}
                      />
                    </div>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
