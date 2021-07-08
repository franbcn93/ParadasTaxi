import React, { Fragment, useEffect } from "react";
import { Map } from "./components/Map";

function App() {
  const consultarAPI = async () => {
    // Consultamos la API
    const api = await fetch(
      `http://www.bcn.cat/tercerlloc/files/transports/transports-addicionals/opendatabcn_transports_transports-addicionals_parades-taxi-js.json`
    );
    // Obtenemos la llamada
    const frase = await api.json();

    // Solo quiero saber la ubicación de las paradas del distrito de Sant Martí
    frase.map((nombre) => {
      // Desestructuramos la API
      const agrupacion = nombre.addresses[0];
      // Si es del distrito ... "Sant Martí"
      if (agrupacion.district_name === "Sant Martí") {
        const carrer =
          agrupacion.address_name + ", nº " + agrupacion.street_number_1;
        // Creamos el elemento y lo añadimos a la raíz
        let itemStreet = document.createElement("li");
        let textNode = document.createTextNode(carrer);
        itemStreet.appendChild(textNode);
        document.getElementById("root").appendChild(itemStreet);
      }
      return null;
    });
  };

  // Cargar las calles
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
      <h1>Paradas de taxi en el distrito de Sant Martí:</h1>
      <Map />
      <p></p>
    </Fragment>
  );
}

export default App;
