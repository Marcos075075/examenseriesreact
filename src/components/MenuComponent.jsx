import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceSeries from '../services/ServiceSeries';

export default class MenuComponent extends Component {
    service = new ServiceSeries();

    state = {
        series: [],
        seriesOpen: false,
        menuOpen: false
    }

    toggleSeries = () => {
        this.setState((state) => ({
            seriesOpen: !state.seriesOpen
        }))
    }

    toggleMenu = () => {
        this.setState((state) => ({
            menuOpen: !state.menuOpen
        }))
    }

    generarSeries = () => {
        this.service.getSeries().then((result) => {
            this.setState({
                series: result
            })
        })
    }

    componentDidMount() {
        this.generarSeries();
    }

    render() {
        return (
            <nav className="sticky top-0 z-20 w-full border-b border-slate-700/70 bg-slate-950/95 text-white shadow-lg shadow-slate-950/20 backdrop-blur">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4 py-3 sm:px-6">
                    <NavLink to="/" className="group flex items-center gap-3" aria-label="SeriesHub, ir al inicio">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
                            S
                        </span>
                        <span className="text-xl font-bold tracking-tight text-white">
                            Series<span className="text-cyan-400">Hub</span>
                        </span>
                    </NavLink>
                    <button onClick={this.toggleMenu} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 md:hidden" aria-controls="navbar-dropdown" aria-expanded={this.state.menuOpen}>
                        <span className="sr-only">{this.state.menuOpen ? 'Close main menu' : 'Open main menu'}</span>
                        <svg className="h-6 w-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
                    </button>
                    <div className={`${this.state.menuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
                        <ul className="mt-4 flex flex-col gap-1 rounded-xl border border-slate-800 bg-slate-900 p-2 font-medium md:mt-0 md:flex-row md:items-center md:gap-2 md:border-0 md:bg-transparent md:p-0">
                            <li className="relative">
                                <NavLink to="/" className={({ isActive }) => `block rounded-lg px-4 py-2.5 transition ${isActive ? 'bg-cyan-400/10 text-cyan-300' : 'text-slate-300 hover:bg-slate-800 hover:text-white'}`} aria-current="page">Inicio</NavLink>
                            </li>
                            <li>
                                <button id="dropdownNvbarButton" type="button" onClick={this.toggleSeries} aria-expanded={this.state.seriesOpen} aria-controls="dropdownNavbar" data-dropdown-toggle="dropdownNavbar" className="flex w-full items-center justify-between rounded-lg px-4 py-2.5 font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white md:w-auto">
                                    Series
                                    <svg className={`ml-2 h-4 w-4 transition-transform ${this.state.seriesOpen ? 'rotate-180' : ''}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>
                                </button>
                                <div id="dropdownNavbar" className={`mt-1 w-full rounded-xl border border-slate-700 bg-slate-800 shadow-xl shadow-slate-950/30 md:absolute md:mt-3 md:w-56 ${this.state.seriesOpen ? '' : 'hidden'}`}>
                                    <ul className="p-2 text-sm font-medium text-slate-300" aria-labelledby="dropdownNvbarButton">
                                        {
                                            this.state.series.map((serie, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink onClick={() => this.setState({ seriesOpen: false, menuOpen: false })} to={"/serie/" + serie.idSerie} className="block rounded-lg px-3 py-2 transition hover:bg-slate-700 hover:text-cyan-300">{serie.nombre}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <NavLink to="/crear" className="block rounded-lg px-4 py-2.5 text-slate-300 transition hover:bg-slate-800 hover:text-white">Crear Personaje</NavLink>
                            </li>
                            <li>
                                <NavLink to="/modificar" className="block rounded-lg px-4 py-2.5 text-slate-300 transition hover:bg-slate-800 hover:text-white">Modificar Personaje</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
