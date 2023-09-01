import { NavLink } from "react-router-dom";
const Nav = (props) => {
    return (
        <nav className="site-nav">
            <div className="container">
                <div className="menu-bg-wrap">
                    <div className="site-navigation">
                        <NavLink to="/" className="logo m-0 float-start">Logo</NavLink>

                        <ul className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end">
                            <li className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }><NavLink to="/">Inicio</NavLink></li>
                            <li><NavLink to="/propiedades" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Propiedades</NavLink></li>
                            <li><NavLink to="/servicios" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Servicios</NavLink></li>
                            <li><NavLink to="/sobre-nosotros" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Sobre nosotros</NavLink></li>
                            <li><NavLink to="/contacto" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "active" : ""
                            }>Contacto</NavLink></li>
                        </ul>

                        <a href="/" className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                            <span></span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;