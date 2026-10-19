import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import ServiceSeries from '../services/ServiceSeries';

export default class MenuComponent extends Component {
    service = new ServiceSeries();

    state = {
        series: [],
        seriesOpen: false
    }

    toggleSeries = () => {
        this.setState((state) => ({
            seriesOpen: !state.seriesOpen
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
            <nav className="bg-neutral-primary w-full z-20 start-0 border-default">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14" /></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
                            <li>
                                <NavLink to="/" className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</NavLink>
                            </li>
                            <li>
                                <button id="dropdownNvbarButton" type="button" onClick={this.toggleSeries} aria-expanded={this.state.seriesOpen} aria-controls="dropdownNavbar" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                                    Series
                                    <svg className="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7" /></svg>
                                </button>
                                <div id="dropdownNavbar" className={`z-10 bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44 ${this.state.seriesOpen ? '' : 'hidden'}`}>
                                    <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownNvbarButton">
                                        {
                                            this.state.series.map((serie, index) => {
                                                return (
                                                    <li key={index}>
                                                        <NavLink to={"/serie/" + serie.idSerie} className="block py-2 px-4 rounded hover:bg-neutral-tertiary">{serie.nombre}</NavLink>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <NavLink to="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</NavLink>
                            </li>
                            <li>
                                <NavLink to="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
