import { useState, useEffect } from 'react';
import axios from 'axios';
import PropiedadItem from '../components/propiedades/PropiedadItem';
import hero_bg_3 from '../images/hero_bg_3.jpg';
const HomePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [propiedades, setPropiedades] = useState([]);
    useEffect(() => {
        const cargarPropiedades = async () => {
            const params = {
                destacada: true
            };
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/propiedades', { params });
            setPropiedades(response.data);
            setLoading(false);
        }
        cargarPropiedades();
    }, []);
    return (
        <>
            <div className="hero">
                <div className="hero-slide">
                    <div
                        className="img overlay"
                        style={{ backgroundImage: `url(${hero_bg_3})` }}
                    ></div>
                </div>

                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 text-center">
                            <h1 className="heading" data-aos="fade-up">
                                La forma más fácil de encontrar la casa de sus sueños
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 text-center mx-auto">
                            <h2 className="font-weight-bold text-primary heading">
                                Propiedades Destacadas
                            </h2>
                        </div>


                        <div className="section section-properties">
                            <div className="container">
                                <div className="row">
                                    {
                                        loading ? (
                                            <p>Cargando....</p>
                                        ) : (
                                            propiedades.map(item => <PropiedadItem key={item.id}
                                                titulo={item.titulo} precio={item.precio} localidad={item.localidad} pais={item.pais} habitaciones={item.habitaciones} banios={item.banios} imagen={item.imagen} id={item.id}/>)
                                        )

                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <section className="features-1">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="box-feature">
                                <span className="flaticon-house"></span>
                                <h3 className="mb-3">Nuestras Propiedades</h3>
                                <p>
                                    Ofrecemos una amplia variedad de opciones en diferentes zonas de la ciudad. ¡Encuentra tu hogar perfecto con nosotros!
                                </p>
                                <p><a href="/propiedades" className="learn-more">Ver más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-4" data-aos="fade-up" data-aos-delay="500">
                            <div className="box-feature">
                                <span className="flaticon-building"></span>
                                <h3 className="mb-3">Propiedades en Venta</h3>
                                <p>
                                    Desde apartamentos acogedores hasta lujosas casas con vistas impresionantes, ¡tenemos lo que necesitas para encontrar tu hogar perfecto!
                                </p>
                                <p><a href="/propiedades" className="learn-more">Ver más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="box-feature">
                                <span className="flaticon-house-3"></span>
                                <h3 className="mb-3">Agentes de bienes raíces</h3>
                                <p>
                                    Con nuestra experiencia y dedicación, podemos ayudarte a encontrar la casa perfecta para ti y tu familia. ¡Contáctanos hoy mismo!
                                </p>
                                <p><a href="/propiedades" className="learn-more">Ver más</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="section section-4 bg-light">
                <div className="container">
                    <div className="row justify-content-center text-center mb-5">
                        <div className="col-lg-5">
                            <h2 className="font-weight-bold heading text-primary mb-4">
                                Encontremos el hogar perfecto para ti
                            </h2>
                            <p className="text-black-50">
                                Sabemos que encontrar el hogar perfecto puede ser abrumador, pero no tienes que hacerlo solo. Con nuestro equipo de expertos, podemos ayudarte a encontrar la propiedad que se ajuste a tus necesidades y presupuesto. Trabajaremos contigo en cada paso del camino para asegurarnos de que te sientas cómodo y confiado en tu decisión.
                            </p>
                        </div>
                    </div>
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
                                    <h3 className="heading">200 propiedades</h3>
                                    <p className="text-black-50">
                                        Nuestra amplia selección de 200 propiedades te ofrece la oportunidad de encontrar el hogar de tus sueños.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-person"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">Los mejores agentes</h3>
                                    <p className="text-black-50">
                                        Nuestros agentes inmobiliarios son los mejores en su clase y están listos para ayudarte.
                                    </p>
                                </div>
                            </div>

                            <div className="d-flex feature-h">
                                <span className="wrap-icon me-3">
                                    <span className="icon-security"></span>
                                </span>
                                <div className="feature-text">
                                    <h3 className="heading">Propiedades legítimas</h3>
                                    <p className="text-black-50">
                                        Todas nuestras propiedades son verificadas para garantizar que sean legítimas y cumplan con los estándares de calidad.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row section-counter mt-5">
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">3298</span></span
                                >
                                <span className="caption text-black-50">Clientes satisfechos</span>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">225</span></span
                                >
                                <span className="caption text-black-50">Propiedades en venta</span>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="500"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">60</span></span
                                >
                                <span className="caption text-black-50">Años de experiencia</span>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="600"
                        >
                            <div className="counter-wrap mb-5 mb-lg-0">
                                <span className="number"
                                ><span className="countup text-primary">150</span></span
                                >
                                <span className="caption text-black-50">Agentes para ayudarte</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <div className="row justify-content-center footer-cta" data-aos="fade-up">
                    <div className="col-lg-7 mx-auto text-center">
                        <h2 className="mb-4">Sea parte de nuestro equipo de agentes</h2>
                        <p>
                            <a
                                href="/sobre-nosotros"
                                className="btn btn-primary text-white py-3 px-4"
                            >Trabaja con nosotros</a
                            >
                        </p>
                    </div>
                </div>

            </div>

        </>
    )
}

export default HomePage;