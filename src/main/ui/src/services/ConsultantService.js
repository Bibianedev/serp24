import axios from 'axios';


const CONSULTANT_BASE_REST_API_URL = 'http://localhost:8080/api/consultants';


class ConsultantService{
    getConsultants(){
        return axios.get(CONSULTANT_BASE_REST_API_URL);

    }
}
export default new ConsultantService;