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
      <main className="min-h-[calc(100vh-73px)] bg-slate-950 px-4 py-10 text-white sm:px-6 lg:py-16">
        <div className="mx-auto max-w-6xl">
          <NavLink to={"/serie/" + this.props.idserie} className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300" aria-current="page">
            <span aria-hidden="true">←</span> Volver a la serie
          </NavLink>
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Reparto</span>
            <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Personajes</h1>
            <p className="mt-3 text-slate-400">Conoce a los personajes de esta serie.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/30">
            <table className="w-full table-auto text-left">
              <thead className="border-b border-slate-700 bg-slate-800/80">
                <tr>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 sm:px-8">Personaje</th>
                  <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-400 sm:px-8">Imagen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {
                  this.state.personajes.map((personaje, index) => {
                    return (
                      <tr key={index} className="transition hover:bg-slate-800/60">
                        <td className="px-5 py-5 text-lg font-semibold text-white sm:px-8">{personaje.nombre}</td>
                        <td className="px-5 py-5 sm:px-8">
                          <img src={personaje.imagen} alt={`Imagen de ${personaje.nombre}`} className="h-24 w-20 rounded-xl object-cover shadow-lg shadow-slate-950/40 sm:h-28 sm:w-24" />
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </main>
    )
  }
}
