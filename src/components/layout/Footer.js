const Footer = (props) => {
    return (
        <>
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="widget">
                                <h3>Contacto</h3>
                                <address>Av. San Martín 1234, Potrero de los Funes, San Luis 5701.</address>
                                <ul className="list-unstyled links">
                                    <li><a href="tel:+54 266 4013977">+54 266 4013977</a></li>
                                    <li>
                                        <a href="mailto:contacto@inmobiliaria.com">contacto@inmobiliaria.com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        </div>
                        <div className="col-lg-4">
                            <div className="widget">
                                <h3>Links</h3>
                                <ul className="list-unstyled links">
                                    <li><a href="/propiedades">Propiedades</a></li>
                                    <li><a href="/servicios">Servicios</a></li>
                                    <li><a href="/sobre-nosotros">Sobre Nosotros</a></li>
                                    <li><a href="/contacto">Contacto</a></li>
                                </ul>

                                <ul className="list-unstyled social">
                                    <li className="me-1">
                                        <a href="https://www.instagram.com/baraccomateo/"><span className="icon-instagram" target="_blank"></span></a>
                                    </li>
                                    <li className="me-1">
                                        <a href="https://www.facebook.com/mateo.baracco" target="_blank"><span className="icon-facebook"></span></a>
                                    </li>
                                    <li className="me-1">
                                        <a href="https://www.linkedin.com/in/juan-mateo-baracco-94997216a/" target="_blank"><span className="icon-linkedin"></span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <p>
                                Copyright &copy;
                                <script>
                                    document.write(new Date().getFullYear());
                                </script>
                                . Todos los derechos reservados. &mdash; Diseñada por
                                <a href="https://www.linkedin.com/in/juan-mateo-baracco-94997216a/" target="_blank">Juan Mateo Baracco</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Footer;