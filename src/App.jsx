import { useState } from 'react'

import './App.css'
import HeaderPrueba from './component/header/header'
import BreadcrumbMigas from './component/migas/Breadcrumb'
import ControlledCarousel from './component/carousel/carousel'
import Footer from './component/footer/Footer'

import Admin_Panel from './component/Admin_Panel/Admin_Panel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderPrueba />
      <BreadcrumbMigas/>
       <Admin_Panel/>
      <Footer/>
    </div>
  )
}

export default App
