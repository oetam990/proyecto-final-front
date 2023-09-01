import { useState, useEffect } from 'react';
import axios from 'axios';
import PropiedadItem from '../components/propiedades/PropiedadItem';
import hero_bg_1 from '../images/hero_bg_1.jpg';
const PropiedadesPage = (props) => {
    const [loading, setLoading] = useState(false);
    const [propiedades, setPropiedades] = useState([]);
    useEffect(() => {
        const cargarPropiedades = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/propiedades');
            setPropiedades(response.data);
            setLoading(false);
        }
        cargarPropiedades();
    }, []);
    return (
        <>
            <div className="hero page-inner overlay" style={{ backgroundImage: `url(${hero_bg_1})` }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-9 text-center mt-5">
                            <h1 className="heading" data-aos="fade-up">Propiedades</h1>

                            <nav aria-label="breadcrumb" data-aos="fade-up" data-aos-delay="200">
                                <ol className="breadcrumb text-center justify-content-center">
                                    <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                    <li className="breadcrumb-item active text-white-50" aria-current="page">
                                        Propiedades
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row mb-5 align-items-center">
                        <div className="col-lg-6 text-center mx-auto">
                            <h2 className="font-weight-bold text-primary heading">
                                Todas nuestras Propiedades
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
                                                titulo={item.titulo} precio={item.precio} localidad={item.localidad} pais={item.pais} habitaciones={item.habitaciones} banios={item.banios} imagen={item.imagen} id={item.id} />)
                                        )

                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default PropiedadesPage;