import React, { Component } from 'react'
import ServiceSeries from '../services/ServiceSeries';
import { Navigate } from 'react-router-dom';

export default class CrearPersonaje extends Component {
    service = new ServiceSeries();

    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaSerie = React.createRef();

    state = {
        status: false,
        series: [],
        idSerie: null
    }
    
    crearPersonaje = (e) => {
        e.preventDefault();
        var personaje = {
            idPersonaje: 0,
            nombre: this.cajaNombre.current.value,
            imagen: this.cajaImagen.current.value,
            idSerie: parseInt(this.cajaSerie.current.value)
        }

        console.log(personaje);
        
        this.service.crearPersonaje(personaje).then((result) => {
            console.log("creando personaje");
            this.setState({
                status: true,
                idSerie: personaje.idSerie
            })
        })
    }

    generarSeries = () => {
        this.service.getSeries().then((result) => {
            console.log("Generando series");
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
      <div>
        {
            this.state.status &&
            <Navigate to={"/personajes/" +  this.state.idSerie}/>
        }
        <main className="min-h-[calc(100vh-73px)] bg-slate-950 px-4 py-10 text-white sm:px-6 lg:py-16">
          <div className="mx-auto max-w-xl">
            <div className="mb-8">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">Administración</span>
                <h1 className="mt-2 text-4xl font-black tracking-tight text-white">Crear personaje</h1>
                <p className="mt-3 text-slate-400">Añade un nuevo personaje a una de tus series.</p>
            </div>
            <form onSubmit={this.crearPersonaje} className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl shadow-slate-950/30 sm:p-8">
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">Nombre:</label>
                    <input type="text" ref={this.cajaNombre} className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">Imagen:</label>
                    <input type="text" ref={this.cajaImagen} className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20" />
                </div>
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-300">Serie:</label>
                    <select type="text" ref={this.cajaSerie} className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20">
                    {
                        this.state.series.map((serie, index) => {
                            return (
                                <option key={index} value={serie.idSerie}>{serie.nombre}</option>
                            )
                        })
                    }
                    </select>
                </div>
                <button type="submit" className="w-full rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-slate-900">Crear</button>
            </form>
          </div>
        </main>
      </div>
    )
  }
}
