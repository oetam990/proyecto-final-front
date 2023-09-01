import React from 'react';
const PropiedadDetail = (props) => {
    const { titulo, precio, localidad, pais, habitaciones, banios, imagen, descripcion } = props;
    return (
        <>
        <div
          class="hero page-inner overlay"
          style={{ backgroundImage: `url(${imagen})` }}
        >
          <div class="container">
            <div class="row justify-content-center align-items-center">
              <div class="col-lg-9 text-center mt-5">
                <h1 class="heading" data-aos="fade-up">
                  {titulo}
                </h1>
                <nav
                  aria-label="breadcrumb"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <ol class="breadcrumb text-center justify-content-center">
                    <li class="breadcrumb-item"><a href="/">Inicio</a></li>
                    <li className="breadcrumb-item active text-white-50" aria-current="page">
                      Propiedad
                    </li>
                    <li
                      class="breadcrumb-item active text-white-50"
                      aria-current="page"
                    >
                     {titulo}
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="container">
            <div class="row justify-content-between">
              <div class="col-lg-7">
                <div class="img-property-slide-wrap">
                  <div class="img-property-slide">
                    <img src={imagen} alt="Image" class="img-fluid" />
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <h2 class="heading text-primary">{titulo}</h2>
                <h3 class="heading text-success">$ {precio}</h3>
                <p class="meta">{localidad}, {pais}</p>
                <p class="text-black-50">
                  {descripcion}
                </p>
                <div class="row">
                  <div class="col-6"><span class="icon-bed me-2"></span> {habitaciones} Habitaciones</div>
                  <div class="col-6"><span class="icon-bath me-2"></span> {banios} baños</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>

    )
}

export default PropiedadDetail;