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
                <div style={{ textAlign: "center" }}>
                    <h1>Cargando...</h1>
                </div>
            )
        } else {
            return (
                <div>
                    <img src={this.state.serie.imagen} alt="" />
                    <h1>{this.state.serie.nombre}</h1>
                    <p>{this.state.serie.puntuacion}</p>
                    <NavLink to={"/personajes/" + this.state.serie.idSerie} className="block py-2 px-3 text-black bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Personajes</NavLink>
                </div>
            )
        }
    }
}
