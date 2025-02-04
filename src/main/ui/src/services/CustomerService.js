import axios from 'axios'



const CUSTOMER_BASE_REST_API_URL = 'http://localhost:8080/api/customers';


class CustomerService {
    static async getAllCustomers(token) {
        try {
            const response = await axios.get(CUSTOMER_BASE_REST_API_URL, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error) {
            console.error('Error fetching customers:', error);
            throw error;
        }
    }

    createCustomer(customer){
        return axios.post(CUSTOMER_BASE_REST_API_URL, customer)
    }


    updateCustomer(customerId, customer){
        return axios.put(`${CUSTOMER_BASE_REST_API_URL}/${customerId}`, customerId, customer)
    }

    getCustomerById(customerId){
        return axios.get(`${CUSTOMER_BASE_REST_API_URL}/${customerId}`)
    }


}

export default CustomerService;