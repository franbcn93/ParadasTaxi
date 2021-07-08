import React, { Fragment } from "react";

// Parada Taxi
export const Map = () => {
  return (
    <Fragment>
      <div style={{ width: "100%" }}>
        <iframe
          title="Mapa de paradas de taxi"
          src="https://www.google.com/maps/d/u/0/embed?mid=1gKqRjP_LJZ0-9QD8Vk_VUTjamej5vlfF"
          width="100%"
          height="480"
        ></iframe>
      </div>
    </Fragment>
  );
};
