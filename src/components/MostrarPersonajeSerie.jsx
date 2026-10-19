import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries';

export default class MostrarPersonajeSerie extends Component {
    service = new ServiceSeries();

    state = {
        personaje: null,
        serie: null
    }

    getPersonaje = () => {
        this.service.getPersonaje(this.props.idPersonaje).then((result) => {
            this.setState({
                personaje: result
            })
        })
    }

    getSerie = () => {
        this.service.getSerie(this.props.idserie).then((result) => {
            this.setState({
                serie: result
            })
        })
    }

    componentDidMount() {
        this.getPersonaje();
        this.getSerie();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.idPersonaje !== this.props.idPersonaje) {
            this.getPersonaje();
        }

        if (oldProps.idserie !== this.props.idserie) {
            this.getSerie();
        }
    }

  render() {
    if (!this.state.personaje || !this.state.serie) {
        return (
            <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 p-6 text-slate-300 shadow-xl shadow-slate-950/30">
                <div className="text-center">
                    <div className="mx-auto mb-4 h-9 w-9 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
                    <p>Cargando...</p>
                </div>
            </div>
        );
    } else{
    return (
      <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl shadow-slate-950/30 sm:p-8">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Vista previa</span>
          <h1 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">{this.state.serie.nombre}</h1>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <article className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
            <img src={this.state.serie.imagen} alt={`Imagen de ${this.state.serie.nombre}`} className="h-48 w-full object-cover sm:h-56" />
            <div className="p-4">
              <p className="text-sm font-semibold text-slate-400">Serie</p>
              <h2 className="mt-1 text-lg font-bold text-white">{this.state.serie.nombre}</h2>
            </div>
          </article>
          <article className="overflow-hidden rounded-xl border border-slate-700 bg-slate-800">
            <img src={this.state.personaje.imagen} alt={`Imagen de ${this.state.personaje.nombre}`} className="h-48 w-full object-cover sm:h-56" />
            <div className="p-4">
              <p className="text-sm font-semibold text-slate-400">Personaje</p>
              <h2 className="mt-1 text-lg font-bold text-white">{this.state.personaje.nombre}</h2>
            </div>
          </article>
        </div>
      </section>
    )}
  }
}
