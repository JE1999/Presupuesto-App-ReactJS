import React, { useState, useEffect } from 'react';

//Components layout
import Header from './Components/Layout/Header'

//Components views
import Pregunta from './Components/Views/Pregunta'
import Formulario from './Components/Views/Formulario'
import Listado from './Components/Views/Listado'

function App() {

  const [presupuesto, setPresupuesto] = useState(0)
  const [preguntaPresupuesto, setPreguntaPresupuesto] = useState(true)
  const [gasto, setGasto] = useState({})
  const [gastos, setGastos] = useState([])

  useEffect(() => {
    const listado = [...gastos, gasto]
    setGastos(listado)
  }, [])

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
                />
              :
                (
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <Formulario
                        setGasto={setGasto}
                      />
                    </div>
                    <div className="col-sm-12 col-md-6">
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
