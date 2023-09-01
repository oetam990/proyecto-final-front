import React from 'react';
import { Link } from 'react-router-dom';
const PropiedadItem = (props) => {
    console.log(props)
    const {id, titulo, precio, localidad, pais, habitaciones, banios, imagen} = props;
    return (
        <>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                <div className="property-item mb-30">
                    <a href={`/propiedad/${id}`} className="img">
                        <img src={imagen} alt="Image" className="img-fluid" />
                    </a>

                    <div className="property-content">
                        <div className="price mb-2"><span>$ {precio}</span></div>
                        <div>
                            <span className="d-block mb-2 text-black-50">{titulo}</span>
                            <span className="city d-block mb-3">{localidad}, {pais}</span>

                            <div className="specs d-flex mb-4">
                                <span className="d-block d-flex align-items-center me-3">
                                    <span class="icon-bed me-2"></span>
                                    <span className="caption">{habitaciones} habitaciones</span>
                                </span>
                                <span className="d-block d-flex align-items-center">
                                    <span className="icon-bath me-2"></span>
                                    <span className="caption">{banios} baños</span>
                                </span>
                            </div>


                            <Link to={`/propiedad/${id}`} className="btn btn-primary py-2 px-3">
                                Más detalles
                            </Link>
        
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default PropiedadItem;