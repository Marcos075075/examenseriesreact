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
}
