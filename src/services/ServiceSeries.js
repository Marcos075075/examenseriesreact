import axios from "axios";
import Global from "../Global";

export default class ServiceSeries {
  getSeries() {
    return new Promise(function (resolve) {
      var url = Global.urlApiSeries;
      var request = "/api/series";
      axios.get(url + request).then((response) => {
        console.log("Leyendo series");
        resolve(response.data);
      });
    });
  }

  getSerie(id) {
    return new Promise(function (resolve) {
      var url = Global.urlApiSeries;
      var request = "/api/series/" + id;
      axios.get(url + request).then((response) => {
        console.log("Leyendo serie");
        resolve(response.data);
      });
    });
  }

  getPersonaje(id) {
    return new Promise(function (resolve) {
      var url = Global.urlApiSeries;
        var request = "/api/personajes/" + id;
        console.log(request);
        
        axios.get(url + request).then((response) => {
            console.log("Leyendo personaje");
            resolve(response.data);
        });
    });
  }

  getPersonajes(idserie) {
    return new Promise(function (resolve) {
      var url = Global.urlApiSeries;
      var request = "api/Series/PersonajesSerie/" + idserie;
      axios.get(url + request).then((response) => {
        console.log("Leyendo personajes");
        resolve(response.data);
      });
    });
  }

  getTodosPersonajes() {
    return new Promise(function (resolve) {
      var url = Global.urlApiSeries;
        var request = "api/personajes";
        axios.get(url + request).then((response) => {
            console.log("Leyendo todos los personajes");
            resolve(response.data);
        });
    });
  }

  crearPersonaje(personaje) {
    return new Promise(function (resolve) {        
      var url = Global.urlApiSeries;
      var request = "api/personajes";
      axios.post(url + request, personaje).then((response) => {
        console.log("Creando personaje");
        resolve(response.data);
      }).catch((error) => {
        console.error("Error al crear personaje:");
        resolve(error); // Puedes manejar el error de la manera que prefieras
      });
    });
  }

  modificarPersonaje(idPersonaje, idSerie) {
    return new Promise(function (resolve) {
      var url = Global.urlApiSeries;
      var request = "/api/personajes/" + idPersonaje + "/" + idSerie;
      axios.put(url + request).then((response) => {
        console.log("Modificando ubicacion del personaje");
        resolve(response.data);
      });
    });
  }
}
