import React from 'react'
import Contador from './componentes/Ending/Contador'
import Pokemones from './componentes/Ending/Pokemones'
import CrudApi from './componentes/Ending/CrudApi'
import Menu from './componentes/Ending/Menu'
import ContactForm from './componentes/Ending/ContactForm'
import ContactForm2 from './componentes/Ending/ContactForm2'

import {Routes, Route} from "react-router-dom";


import  './App.css'


function App() {
  return (
    <>
    <div className="container-fluid p-3 d-flex flex-row ">

    <Menu></Menu>
    <div className="container d-flex justify-content-center">
    <div className="col-auto">
    <Routes>

    <Route path='/' element={<CrudApi></CrudApi>}></Route>
    <Route path='/*' element={<CrudApi></CrudApi>}></Route>
    <Route path='/pokemones' element={<Pokemones></Pokemones>}></Route>
    <Route path='/contador' element={<Contador></Contador>}></Route>
    <Route path='/formulario' element={<ContactForm></ContactForm>}></Route>
    <Route path='/formulario2' element={<ContactForm2></ContactForm2>}></Route>
    </Routes>
    </div>
    </div>
    </div>
    </>
    

  )
}

export default App