import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import NotFound from './components/common/redirect';
import HomePage from './components/homePage/homePage';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Recovery from './components/auth/recovery';
import Reset from './components/auth/reset';
const App = () => {
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/recovery" component={Recovery} />
                <Route path="/reset/:token" component={Reset} />
                <Route path="/not-found" component={NotFound} />
                <Redirect to="/not-found" />
            </Switch>
        </div>
    );
};

export default App;
