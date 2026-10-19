import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries';
import MostrarPersonajeSerie from './MostrarPersonajeSerie';
import { Navigate } from 'react-router-dom';

export default class ModificarPersonaje extends Component {
    service = new ServiceSeries();

    cajaSerie = React.createRef();
    cajaPersonaje = React.createRef();

    state = {
        series: [],
        personajes: [],
        status: false,
        serieSeleccionada: null,
        personajeSeleccionado: null
    }

    generarSeries = () => {
        this.service.getSeries().then((result) => {
            this.setState({
                series: result
            })
        })
    }

    generarPersonajes = () => {
        this.service.getTodosPersonajes().then((result) => {
            this.setState({
                personajes: result,
            })
        })
    }

    modificarPersonaje = (e) => {
        e.preventDefault();

        let idPersonaje = parseInt(this.cajaPersonaje.current.value);
        let idSerie = parseInt(this.cajaSerie.current.value);

        this.service.modificarPersonaje(idPersonaje, idSerie).then((result) => {
            this.setState({
                status: true
            })
        })
    }

    guardarSeleccion = () => {
        this.setState({
            serieSeleccionada: parseInt(this.cajaSerie.current.value),
            personajeSeleccionado: parseInt(this.cajaPersonaje.current.value)
        })
    }

    componentDidMount() {
        this.generarSeries();
        this.generarPersonajes();
    }

    render() {
        return (
            <div>
                {
                    this.state.status === true &&
                    <Navigate to={"/personajes/" + this.cajaSerie.current.value} />
                }
                <main className="min-h-[calc(100vh-73px)] bg-slate-950 px-4 py-10 text-white sm:px-6 lg:py-16">
                    <div className="mx-auto max-w-5xl">
                        <div className="mb-8">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Administración</span>
                            <h1 className="mt-2 text-4xl font-black tracking-tight text-white">Modificar personaje</h1>
                            <p className="mt-3 text-slate-400">Selecciona una serie y un personaje para actualizar su relación.</p>
                        </div>
                        <div className="mx-auto max-w-xl">
                            <form onSubmit={this.modificarPersonaje} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/30 sm:p-8">
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-300">Serie:</label>
                                    <select ref={this.cajaSerie} className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" onChange={this.guardarSeleccion}>
                                        {this.state.series.map((serie, index) => {
                                            return (
                                                <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div>
                                    <label className="mb-2 block text-sm font-semibold text-slate-300">Personaje:</label>
                                    <select ref={this.cajaPersonaje} className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" onChange={this.guardarSeleccion}>
                                        {this.state.personajes.map((personaje, index) => {
                                            return (
                                                <option key={index} value={personaje.idPersonaje}>{personaje.nombre}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <button type='submit' className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900">Modificar personaje</button>
                            </form>
                        </div>
                        {
                            this.state.serieSeleccionada !== null &&
                            <div className="mt-8">
                                <MostrarPersonajeSerie idserie={this.state.serieSeleccionada} idPersonaje={this.state.personajeSeleccionado} />
                            </div>
                        }
                    </div>
                </main>
            </div>
        )
    }
}
