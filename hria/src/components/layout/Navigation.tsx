import { NavLink } from 'react-router-dom';
import routes from './nav-routes.json';

export const NavigationComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarNav">
                <ul className="navbar-nav w-100 d-flex justify-content-between">
                    {routes.map((route, index) => (
                        <li className={`nav-item flex-grow-1 ${!index ? '' : 'ms-md-1'}`} key={`link-${index}`}>
                            <NavLink
                                end
                                to={route.route}
                                className={({ isActive }) =>
                                    isActive ? "btn rounded text-uppercase btn-block btn-success" : " btn rounded text-uppercase btn-block btn-secondary"
                                }
                            >
                                {route.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
