import React from 'react';
import './../../css/style.css';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className="bg-info not-found text-white">
            <h1>Opps</h1>
            <p className="lead">متاسفیم صفحه مورد نظر یافت نشد</p>
            <Link className="not-foundLink p-4 mt-3" to="/">
                بازگشت به صفحه اصلی
            </Link>
        </div>
    );
};

export default NotFound;
