import React, { Fragment, useEffect, useState } from "react";
import { Map } from "./components/Map";
import { Error } from "./components/Error";

function App() {
  const [error, setError] = useState(false);

  const consultarAPI = async () => {
    // Consultamos la API
    try {
      // Make a request
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
      // Sino es correcta la resuesta enviamos un mensaje de Error
    } catch (err) {
      if (err.response) {
        console.error("Failed with response", err.response.data);
        setError(true);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Failed in general", err);
        setError(true);
      }
    }
  };

  // Cargar las calles
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Fragment>
      <h1>Paradas de taxi en el distrito de Sant Martí:</h1>
      <Map />
      {error ? (
        <Error mensaje="Falló con la respuesta a la API, puede ser debido a que es una página insegura al no ser HTTPS" />
      ) : null}
    </Fragment>
  );
}

export default App;
