import React from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from './../button';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuthenticated as setUserAuthenticatedRedux } from './../../../redux/actions';

const Header = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const isAuthenticated = useSelector(
        (state) => state.userReducer.isAuthenticated
    );

    const handleLogout = (event) => {
        event.preventDefault();

        // Make api call to logout
        // if request pass then remove the variable
        localStorage.removeItem('isAuthenticated');
        // history.push('/login');
        dispatch(setUserAuthenticatedRedux(false));
    };
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        UL
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <a
                                    className="nav-link active"
                                    aria-current="page"
                                    href="/"
                                >
                                    Home
                                </a> */}
                                <Link to="/" className="nav-link active">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                {/* <a class="nav-link" href="/link">
                                    Add Books
                                </a> */}
                                <Link to="/addbooks" className="nav-link">
                                    Add Books
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Admin</a>
                            </li>
                        </ul>
                        {isAuthenticated ? (
                            <>
                                <span>Welcome user</span>
                                <Button
                                    label="LOGOUT"
                                    clickHandler={handleLogout}
                                />
                            </>
                        ) : (
                            <Button label="LOGIN" clickHandler={() => {}} />
                        )}
                    </div>
                </div>
            </nav>{' '}
            <hr />
        </>
    );
};

export default Header;
