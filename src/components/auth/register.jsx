import React, { useState } from 'react';
import '../../css/auth.css';
import { Link } from 'react-router-dom';
import { notify } from '../../toast/toast';
import { httpRegister } from '../../services/httpAuth';
const Register = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handler = async (e) => {
        e.preventDefault();
        try {
            if (username && email && password) {
                const res = await httpRegister(username, email, password);
                if (res.status && res.status === 201) {
                    await localStorage.setItem('token', res.headers['x-auth']);
                    props.history.replace('/');
                }
            } else {
                notify('warning', 'لطفا همه فیلد ها را  پر کنید');
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                notify('error', err.response.data);
            }
        }
    };
    return (
        <div>
            <div className="sidenav ">
                <div className="login-main-text">
                    <h2>
                        Register From Page
                        <br />
                    </h2>
                    <p className="lead">register from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form ">
                        <form onSubmit={(e) => handler(e)} className="my-3">
                            <div className="form-group">
                                <label>نام کاربری:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="نام کاربری"
                                    value={username}
                                    onChange={(e) =>
                                        setUsername(e.target.value)
                                    }
                                />
                            </div>
                            <div className="form-group">
                                <label>ایمیل:</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Example@info.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label>رمز عبور:</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="********"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-secondary mr-1"
                            >
                                Register
                            </button>
                            <br />
                            <Link to="/login">
                                ایا شما قبلا حساب کاربری داشته اید؟
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
