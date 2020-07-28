import React from 'react';
import '../../css/auth.css';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div>
            <div className="sidenav ">
                <div className="login-main-text">
                    <h2>
                        Login From Page
                        <br />
                    </h2>
                    <p className="lead">
                        Login or register from here to access.
                    </p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form ">
                        <form className="my-3">
                            <div className="form-group">
                                <label>نام کاربری:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="نام کاربری"
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Password"
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary mr-1"
                            >
                                Login
                            </button>
                            <br />
                            <Link>forget password?</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
