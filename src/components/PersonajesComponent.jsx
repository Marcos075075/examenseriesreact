import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import ServiceSeries from '../services/ServiceSeries';

export default class PersonajesComponent extends Component {
    service = new ServiceSeries();

    state = {
        personajes: [],
        // status: false
    }

    getPersonajes = () => {
        this.service.getPersonajes(this.props.idserie).then((result) => {
            console.log(result);
            this.setState({
                personajes: result,
                // status: true
            })
        })
    }

    componentDidMount() {
        this.getPersonajes();
    }

  render() {
    return (
      <div>
        <NavLink to={"/serie/" + this.props.idserie} className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Volver</NavLink>
        <h1>Personajes</h1>
        <table  className="table-auto border-collapse border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-300">Personaje</th>
                    <th className="border border-slate-300">Imagen</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.personajes.map((personaje, index) => {
                        return (
                            <tr key={index}>
                                <td className="border border-slate-300">{personaje.nombre}</td>
                                <td className="border border-slate-300"><img src={personaje.imagen} alt="" /></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
