import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import MenuComponent from './MenuComponent'
import SerieDetalles from './SerieDetalles';
import PersonajesComponent from './PersonajesComponent';

export default class Router extends Component {
  render() {

    function SerieDetalleElement() {
      const { id } = useParams();
      return <SerieDetalles id={id} />;
    }

    function PersonajesComponentElement() {
      const { idserie } = useParams();
      return <PersonajesComponent idserie={idserie} />;
    }
    return (
         <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path='/' element={<HomeComponent />} />
                    <Route path='/serie/:id' element={<SerieDetalleElement />} />
                    <Route path='/personajes/:idserie' element={<PersonajesComponentElement />} />
                </Routes>
            </BrowserRouter>
    )
  }
}
