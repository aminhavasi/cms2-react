import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpReset } from '../../services/httpAuth';
import '../../css/auth.css';
import { notify } from '../../toast/toast';

const Reset = (props) => {
    const [password, setPassword] = useState('');
    useEffect(() => {
        console.log(props.match.params.token);
    });
    const handler = async (e) => {
        e.preventDefault();
        try {
            if (password) {
                const res = await httpReset(password, props.match.params.token);
                if (res && res.status === 200) {
                    props.history.replace('/login');
                }
            } else {
                notify('warning', 'لطفا پسورد جدید را وارد کنید');
            }
        } catch (error) {
            if (error.response && error.response.status === 400) {
                notify('error', error.response.data);
            }
        }
    };
    return (
        <div>
            <div className="recovry">
                <div
                    className="shadow p-5 bg-light "
                    style={{ marginTop: '150px' }}
                >
                    <h3 className="text-center">
                        {' '}
                        صفحه انتخاب رمز عبور جدید برای حساب کاربری شما
                    </h3>
                    <p className="lead">لطفا پسورد جدید خود را وارد کنید </p>
                    <form onSubmit={(e) => handler(e)}>
                        <div className="form-group">
                            <label>رمز جدید:</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-secondary">تغییر رمز</button>
                        <br />
                        <Link className="Linkrecovery" to="/login">
                            بازگشت به صفحه ورود
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Reset;
