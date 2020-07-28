import http from './httpServices';
import proxy from '../config/proxy.json';
export function httpRegister(username, email, password) {
    return http.post(proxy.api_register, { username, email, password });
}

export function httpLogin(email, password) {
    return http.post(proxy.api_login, { email, password });
}
