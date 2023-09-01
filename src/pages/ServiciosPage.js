import hero_bg_1 from '../images/hero_bg_1.jpg';
import person_1 from '../images/person_1-min.jpg';
import person_2 from '../images/person_2-min.jpg';
import person_3 from '../images/person_3-min.jpg';
import person_4 from '../images/person_4-min.jpg';
const ServiciosPage = (props) => {
    return (
        <>
            <div className="hero page-inner overlay" style={{ backgroundImage: `url(${hero_bg_1})` }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 text-center mt-5">
                            <h1 className="heading" data-aos="fade-up">Servicios</h1>

                            <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                                <ol className="breadcrumb text-center justify-content-center">
                                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                    <li className="breadcrumb-item active text-white-50" aria-current="page">
                                        Servicios
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="box-feature mb-4">
                                <span className="flaticon-house mb-4 d-block"></span>
                                <h3 className="text-black mb-3 font-weight-bold">
                                    Propiedades de calidad
                                </h3>
                                <p className="text-black-50">
                                    En nuestra inmobiliaria, ofrecemos propiedades de calidad con excelentes ubicaciones. Nuestro equipo está
                                    comprometido
                                    en ayudarlo a encontrar la propiedad perfecta para sus necesidades y presupuesto.
                                </p>
                                <p><a href="#" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div className="box-feature mb-4">
                                <span className="flaticon-house-2 mb-4 d-block-3"></span>
                                <h3 className="text-black mb-3 font-weight-bold">Agentes mejor calificados</h3>
                                <p className="text-black-50">
                                    Nuestros agentes inmobiliarios están altamente capacitados y son los mejores calificados en el mercado. Su
                                    amplio
                                    conocimiento y experiencia les permite brindar un servicio excepcional y encontrar la propiedad perfecta
                                    para cada
                                    cliente.
                                </p>
                                <p><a href="#" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="500">
                            <div className="box-feature mb-4">
                                <span className="flaticon-building mb-4 d-block"></span>
                                <h3 className="text-black mb-3 font-weight-bold">
                                    Propiedades en Venta
                                </h3>
                                <p className="text-black-50">
                                    Desde apartamentos acogedores hasta lujosas casas con vistas impresionantes, ¡tenemos lo que necesitas
                                    para encontrar tu
                                    hogar perfecto!
                                </p>
                                <p><a href="#" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
                            <div className="box-feature mb-4">
                                <span className="flaticon-house-3 mb-4 d-block-1"></span>
                                <h3 className="text-black mb-3 font-weight-bold">Propiedades en Alquiler</h3>
                                <p className="text-black-50">
                                    Desde apartamentos con vistas espectaculares hasta casas acogedoras en las mejores zonas, ¡nuestro equipo está listo
                                    para ayudarte a encontrar tu próximo hogar!
                                </p>
                                <p><a href="#" className="learn-more">Leer más</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section sec-testimonials">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-md-6">
                            <h2 className="font-weight-bold heading text-primary mb-4 mb-md-0">
                                Lo que dicen nuestros clientes
                            </h2>
                        </div>
                        <div className="col-md-6 text-md-end">
                            <div id="testimonial-nav">
                                <span className="prev" data-controls="prev">Anterior</span>

                                <span className="next" data-controls="next">Siguiente</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4"></div>
                    </div>
                    <div className="testimonial-slider-wrap">
                        <div className="testimonial-slider">
                            <div className="item">
                                <div className="testimonial">
                                    <img src={person_1} alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Luis Morales</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;Fue un placer trabajar con ellos. Me impresionó su conocimiento del mercado y su capacidad para
                                            encontrar
                                            propiedades que se ajustaran a mis necesidades. Siempre estuvieron disponibles para responder mis
                                            preguntas y recomiendo
                                            sus servicios a cualquiera que busque comprar o vender una propiedad.&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Abogado</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial">
                                    <img src={person_2} alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Javier Gómez</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;La inmobiliaria superó todas mis expectativas. El equipo fue muy amable y servicial en todo
                                            momento, y
                                            encontraron la propiedad perfecta para mí en poco tiempo. Me impresionó su conocimiento del mercado
                                            inmobiliario y su
                                            atención al detalle en cada paso del proceso. Definitivamente recomiendo sus servicios a cualquiera
                                            que busque comprar o
                                            vender una propiedad.&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Ingeniero</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial">
                                    <img src={person_3} alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Alejandro Hernández</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;Desde el primer momento, su equipo de agentes inmobiliarios me brindó una atención
                                            personalizada, escuchando mis
                                            necesidades y ofreciéndome opciones que se ajustaban a mis requerimientos y presupuesto. Además, me
                                            guiaron durante todo
                                            el proceso de compra de mi casa, asesorándome en cada paso y resolviendo cualquier duda que pudiera
                                            tener.&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Contadora</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="testimonial">
                                    <img src={person_4} alt="Image" className="img-fluid rounded-circle w-25 mb-4" />
                                    <div className="rate">
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                        <span className="icon-star text-warning"></span>
                                    </div>
                                    <h3 className="h5 text-primary mb-4">Laura Rodríguez</h3>
                                    <blockquote>
                                        <p>
                                            &ldquo;Estoy muy contenta con el servicio que recibí de la inmobiliaria. El equipo fue muy amable y
                                            profesional en todo
                                            momento, y me ayudaron a encontrar la propiedad perfecta para mí. Me impresionó su habilidad para
                                            negociar y su atención
                                            al detalle en cada paso del proceso. Definitivamente recomiendo sus servicios a cualquiera que busque
                                            comprar o vender
                                            una propiedad.&rdquo;
                                        </p>
                                    </blockquote>
                                    <p className="text-black-50">Contadora</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiciosPage;