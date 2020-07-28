import React, { useState } from 'react';
import '../../css/auth.css';
import { Link } from 'react-router-dom';
import { httpRecovery } from '../../services/httpAuth';
import { notify } from '../../toast/toast';
const Recovery = (props) => {
    const [email, setEmail] = useState('');
    const handle = async (e) => {
        e.preventDefault();
        try {
            if (email) {
                const res = await httpRecovery(email);
                if (res && res.status === 200) {
                    notify('info', 'ایمیل حاوی لینک ریکاوری ارسال شد');
                }
            } else {
                notify('warning', 'لطفا ایمیل خود را وارد کنید');
            }
        } catch (err) {
            if (err.response && err.response.status === 400) {
                notify('error', err.response.data);
            } else {
                notify('error', 'something went wrong');
            }
        }
    };
    return (
        <div className="recovry">
            <div
                className="shadow p-5 bg-light "
                style={{ marginTop: '150px' }}
            >
                <h3 className="text-center"> صفحه بازیابی رمز عبور </h3>
                <p className="lead">
                    لطفا ایمیل خود را وار کنید و سپس گزینه ریکاوری را بزنید{' '}
                </p>
                <form onSubmit={(e) => handle(e)}>
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
                    <button className="btn btn-secondary">ریکاوری</button>
                    <br />
                    <Link className="Linkrecovery" to="/login">
                        بازگشت به صفحه ورود
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Recovery;
