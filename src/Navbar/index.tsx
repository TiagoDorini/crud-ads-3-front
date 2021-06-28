import { Link } from "react-router-dom";
import './styles.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-custom bg-color-custom">
            <div className="container-fluid">
                <Link to={'/'} className="navbar-brand" href="#"><h4><i className="fas fa-user"></i> &nbsp; CRUD Clientes</h4></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
