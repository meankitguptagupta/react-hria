import { Link } from 'react-router-dom';

export const TopbarComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link to="/" className="navbar-brand">
                <div className="d-flex flex-row">
                    <img src={process.env.REACT_APP_SHORT_LOGO_SRC} alt={process.env.REACT_APP_NAME} className='d-inline-block align-top rounded-circle' style={{ width: '3rem' }} />
                    <div className="d-flex flex-column ms-2">
                        <div className="text-uppercase lh-1">
                            <div className="fw-bold fs-4">Hizb ur Rahman</div>
                            <div className="fs-6">Islamic Academy</div>
                        </div>
                    </div>
                </div>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className='nav-item'>
                        <img src={process.env.REACT_APP_DEFAULT_AVATAR} alt='Muhammad Ali' className='rounded-circle float-md-end' style={{ width: '3rem' }} />
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Muhammad Ali
                        </a>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
