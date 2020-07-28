import React, { useState } from 'react';
import '../../css/auth.css';
import { Link } from 'react-router-dom';
import { httpLogin } from '../../services/httpAuth';
import { notify } from '../../toast/toast';
const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handle = async (e) => {
        e.preventDefault();
        try {
            if (email && password) {
                const res = await httpLogin(email, password);
                if (res && res.status === 200) {
                    await localStorage.setItem('token', res.headers['x-auth']);

                    props.history.replace('/');
                }
            } else {
                notify('warning', 'لطفا تمام فیلد ها را پر کنید');
            }
        } catch (err) {
            if (err.response) {
                notify('error', err.response.data);
            }
        }
    };
    return (
        <div>
            <div className="sidenav ">
                <div className="login-main-text">
                    <h2>
                        Login From Page
                        <br />
                    </h2>
                    <p className="lead">Login from here to access.</p>
                </div>
            </div>
            <div className="main">
                <div className="col-md-6 col-sm-12">
                    <div className="login-form ">
                        <form onSubmit={(e) => handle(e)} className="my-3">
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
                                <label>Password</label>
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
                                Login
                            </button>
                            <br />
                            <Link to="/recovery">forget password?</Link>
                            <br />
                            <Link to="/register">ایا شما اکانتی ندارید؟</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
