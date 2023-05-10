import React, { useState } from 'react'
import { Chart } from '../chart/chart'
import FormDate from '../DateChart/DateChart'
import "./reporte.css"
function Reporte() {
    const [dtoPlatosFecha, setdtoPlatosFechas]  = useState(null)
    return (
        <div className="reporteContainer">
             <FormDate setdtoPlatosFechas={setdtoPlatosFechas} />
             <Chart dtoPlatosFecha={dtoPlatosFecha}/>
        </div>
    )
}

export default Reporte
