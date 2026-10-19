import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries';
import { NavLink } from 'react-router-dom';

export default class SerieDetalles extends Component {
    service = new ServiceSeries();

    state = {
        serie: null,
        status: false
    }

    getSerie = () => {
        this.service.getSerie(this.props.id).then((result) => {
            console.log(result);
            this.setState({
                serie: result,
                status: true
            })
        })
    }

    componentDidMount() {
        this.getSerie();
    }

    componentDidUpdate(oldProps) {
        if (oldProps.id !== this.props.id) {
            this.getSerie();
        }
    }

    render() {
        if (!this.state.status) {
            return (
                <div className="flex min-h-[60vh] items-center justify-center bg-slate-950 px-4 text-white">
                    <div className="text-center">
                        <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-slate-700 border-t-cyan-400" />
                        <p className="text-lg font-medium text-slate-300">Cargando serie...</p>
                    </div>
                </div>
            )
        } else {
            return (
                <main className="min-h-[calc(100vh-73px)] bg-slate-950 px-4 py-10 text-white sm:px-6 lg:py-16">
                    <div className="mx-auto max-w-5xl">
                        <NavLink to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-cyan-300">
                            <span aria-hidden="true">←</span> Volver al inicio
                        </NavLink>
                        <section className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl shadow-slate-950/50">
                            <div className="grid md:grid-cols-[minmax(0,280px)_1fr]">
                                <div className="relative min-h-[320px] bg-slate-800">
                                    <img src={this.state.serie.imagen} alt={`Portada de ${this.state.serie.nombre}`} className="h-full min-h-[320px] w-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent md:bg-gradient-to-r" />
                                </div>
                                <div className="flex flex-col justify-center p-7 sm:p-10">
                                    <span className="mb-4 w-fit rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                                        Serie
                                    </span>
                                    <h1 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">{this.state.serie.nombre}</h1>
                                    <div className="mb-8 flex items-center gap-3">
                                        <span className="text-sm text-slate-400">Puntuación</span>
                                        <span className="rounded-lg bg-amber-400/10 px-3 py-1 text-xl font-bold text-amber-300">
                                            ★ {this.state.serie.puntuacion}
                                        </span>
                                    </div>
                                    <NavLink to={"/personajes/" + this.state.serie.idSerie} className="inline-flex w-fit items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20" aria-current="page">
                                        Ver personajes <span aria-hidden="true">→</span>
                                    </NavLink>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
            )
        }
    }
}
