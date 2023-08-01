import React from 'react';

const Pilares = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-4 columna-personalizada">
          <img width= "200px" src="iconos/valoracion.png" className="centrado-iconos" alt="Imagen de Valoración" />
          <h3>Reserva con nosotros</h3>
          <p>¡Reserva ahora para una experiencia inolvidable! Con un servicio excepcional y atención personalizada, nuestra empresa se asegura de que cada detalle sea perfecto.</p>
        </div>
        <div className="col-sm-4 columna-personalizada">
          <img width="200px" src="iconos/reserva.png" className="centrado-iconos" alt="Imagen de Reserva" />
          <h3>Destinos Recomendados</h3>
          <p>¡Explora destinos de ensueño con nosotros! Reserva ahora para una atención personalizada y una experiencia perfecta. ¡Contáctanos y asegura tu lugar hoy mismo!</p>
        </div>
        <div className="col-sm-4 columna-personalizada">
          <img width= "200px" src="iconos/destinos.png" className="centrado-iconos" alt="Imagen de Destinos" />
          <h3>Top Mejores Valorados</h3>
          <p>¡Descubre los destinos más populares con nosotros! Contáctanos para obtener información detallada y planificar tu próxima aventura. ¡Te esperamos!</p>
        </div>
      </div>
    </div>
  );
};

export default Pilares;
+