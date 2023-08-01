function Footer() {
    return (
      <footer className="bg-dark text-light py-3">
        <div className="container footer-container">
          <div className="row">
            <div className="col-md-4">
              <h4>Información de contacto</h4>
              <p>Avenida Libertador Bernardo O'Higgins 3363, Estación Central, Santiago, Chile.</p>
              <p>Teléfono: +562 718 0000</p>
              <p>Correo electrónico: reinaldo.pacheco@usach.cl</p>
            </div>
            <div className="col-md-4">
              <h4>Redes sociales</h4>
              <div className="d-flex justify-content-center">
                <img src="iconos/facebook.png" height="80" alt="Facebook"/>
                <img src="iconos/twitter.png" height="80" alt="Twitter"/>
                <img src="iconos/instagram.png" height="80" alt="Instagram"/>
              </div>
            </div>
            <div className="col-md-4">
              <h4>Enlaces útiles</h4>
              <ul className="list-unstyled">
                <li><a href="#">Política de privacidad</a></li>
                <li><a href="#">Términos y condiciones</a></li>
                <li><a href="#">Preguntas frecuentes</a></li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0 mt-3">&copy; 2023 DondeViajar.cl - Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;