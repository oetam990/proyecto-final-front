import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import PropiedadDetail from '../components/propiedades/PropiedadDetail';
const Propiedad = (props) => {
    const [loading, setLoading] = useState(false);
    const [propiedades, setPropiedades] = useState([]);
    const { id } = useParams(); 
    useEffect(() => {
        const cargarPropiedad = async () => {
            setLoading(true);
            const response = await axios.get(`http://localhost:3000/api/propiedad/${id}`);
            setPropiedades(response.data);
            setLoading(false);
        }
        cargarPropiedad();
    }, []);
    return (
        <>
            {
                loading ? (
                    <p>Cargando....</p>
                ) : (
                        propiedades.map(item => <PropiedadDetail key={item.id}
                            titulo={item.titulo} precio={item.precio} localidad={item.localidad} pais={item.pais} habitaciones={item.habitaciones} banios={item.banios} imagen={item.imagen} descripcion={item.descripcion} />)
                )

            }
        </>
    )
}

export default Propiedad;