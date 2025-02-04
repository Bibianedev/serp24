import axios from 'axios';

class Authentification {
    login(username, password) {
        return axios.post('http://localhost:8080/login', {
            username,
            password
        }, { withCredentials: true });
    }
}

export default new Authentification();