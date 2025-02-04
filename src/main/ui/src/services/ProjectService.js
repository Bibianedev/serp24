import axios from 'axios';


const PROJECT_BASE_REST_API_URL = 'http://localhost:8080/api/projects';


class ProjectService {
    getProjects() {
        return axios.get(PROJECT_BASE_REST_API_URL);
    }
}
export default new ProjectService;