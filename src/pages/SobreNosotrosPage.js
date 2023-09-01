import hero_bg_3 from '../images/hero_bg_3.jpg';
import img_1 from '../images/img_1.jpg';
import img_2 from '../images/img_2.jpg';
import img_3 from '../images/img_3.jpg';
const SobreNosotrosPage = (props) => {
    return (
        <>
            <div className="hero page-inner overlay" style={{ backgroundImage: `url(${hero_bg_3})` }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 text-center mt-5">
                            <h1 className="heading" data-aos="fade-up">Sobre Nosotros</h1>

                            <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                                <ol className="breadcrumb text-center justify-content-center">
                                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                    <li className="breadcrumb-item active text-white-50" aria-current="page">
                                        Sobre nosotros
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="row text-left mb-5">
                        <div className="col-12">
                            <h2 className="font-weight-bold heading text-primary mb-4">Sobre nosotros</h2>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-black-50">
                                Somos una inmobiliaria con más de 60 años de experiencia en el mercado inmobiliario. Nuestro objetivo es
                                proporcionar a
                                nuestros clientes un servicio excepcional y propiedades de calidad. Estamos comprometidos en escuchar las
                                necesidades de
                                nuestros clientes y trabajar juntos para encontrar la propiedad perfecta para ellos.
                            </p>
                            <p className="text-black-50">
                                Contamos con un equipo de agentes inmobiliarios altamente capacitados, que se dedican a trabajar de manera
                                diligente
                                para ofrecer un servicio personalizado a cada uno de nuestros clientes. Nuestros agentes inmobiliarios son
                                expertos en
                                el mercado inmobiliario y tienen un amplio conocimiento sobre las propiedades disponibles en la zona. Nos
                                aseguramos de
                                mantenerlos actualizados con las últimas tendencias y tecnologías para que puedan brindar un servicio
                                excepcional.
                            </p>
                            <p className="text-black-50">
                                En nuestra inmobiliaria, creemos que la transparencia y la honestidad son fundamentales en el negocio
                                inmobiliario. Nos
                                esforzamos por proporcionar información precisa y detallada sobre cada una de nuestras propiedades, así como
                                sobre los
                                procesos de compra y venta. Trabajamos con nuestros clientes para asegurarnos de que tengan toda la
                                información
                                necesaria para tomar decisiones informadas sobre sus propiedades.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-black-50">
                                En nuestra búsqueda por brindar el mejor servicio posible, hemos invertido en tecnología avanzada y
                                herramientas de
                                última generación para hacer que el proceso de compra o venta de una propiedad sea lo más fácil posible para
                                nuestros
                                clientes. Nuestro sitio web de fácil navegación, nuestras herramientas de búsqueda avanzada y nuestro
                                sistema de
                                seguimiento de propiedades, son solo algunas de las herramientas que ofrecemos para hacer que la búsqueda de
                                propiedades
                                sea un proceso sin problemas.
                            </p>
                            <p className="text-black-50">
                                En nuestra inmobiliaria, estamos comprometidos en brindar un servicio excepcional a nuestros clientes, desde
                                el primer
                                contacto hasta el final de la transacción. Creemos que cada cliente es único y, por lo tanto, nos esforzamos
                                por ofrecer
                                un servicio personalizado que se ajuste a sus necesidades y presupuesto. Si está buscando una inmobiliaria
                                confiable y
                                profesional, ¡no dude en contactarnos hoy mismo!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section pt-0">
                <div className="container">
                    <div className="row justify-content-between mb-5">
                        <div className="col-lg-7 mb-5 mb-lg-0 order-lg-2">
                            <div className="img-about dots">
                                <img src={hero_bg_3} alt="Image" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-home2"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">Propiedades de calidad</h3>
                                    <p className="text-black-50">
                                        "En nuestra inmobiliaria, nos enfocamos en ofrecer propiedades de calidad que se ajusten a las
                                        necesidades y presupuesto
                                        de nuestros clientes."
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-person"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">Los mejores Agentes</h3>
                                    <p className="text-black-50">
                                        "Contamos con un equipo de agentes inmobiliarios altamente capacitados y comprometidos en brindar un
                                        servicio
                                        excepcional, para ayudarlo a encontrar la propiedad perfecta para sus necesidades y presupuesto."
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-security"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">Fácil y Segura</h3>
                                    <p className="text-black-50">
                                        "En nuestra inmobiliaria, nos esforzamos por hacer que el proceso de compra o venta de una propiedad sea
                                        fácil y seguro,
                                        proporcionando herramientas y tecnología avanzada para nuestros clientes."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
                            <img src={img_1} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-4 mt-lg-5" data-aos="fade-up" data-aos-delay="100">
                            <img src={img_3} alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                            <img src={img_2} alt="Image" className="img-fluid" />
                        </div>
                    </div>
                    <div className="row section-counter mt-5">
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"><span className="countup text-primary">3298</span></span>
                                <span className="caption text-black-50">Clientes satisfechos</span>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"><span className="countup text-primary">60</span></span>
                                <span className="caption text-black-50">Años de experiencia</span>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"><span className="countup text-primary">150</span></span>
                                <span className="caption text-black-50">Agentes para ayudarte</span>
                            </div>
                        </div>
                        <div className="col-6 col-sm-6 col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"><span className="countup text-primary">225</span></span>
                                <span className="caption text-black-50">Propiedades en venta</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SobreNosotrosPage;