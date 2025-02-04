import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react'
import CustomerService from '../services/CustomerService';


function Customers() {
    const [customers, setCustomers] = useState([]);
    const [token, setToken] = useState(null);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();

    const login = async () => {
        try {
            const response = await fetch('http://localhost:8080/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: 'bibi', password: 'bibi' }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const data = await response.json();
            console.log('Login erfolgreich:', data);


            setToken(data.token);
            localStorage.setItem('token', data.token);

            return data.token;
        } catch (error) {
            console.error('Login Error:', error);
            setLoginError('Login failed. Please try again.');
        }
    };


    const fetchCustomers = async (authToken) => {
        try {
            const response = await CustomerService.getAllCustomers(authToken);
            setCustomers(response);
            console.debug('Customers fetched:', response);
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    useEffect(() => {

        const authenticateAndFetchCustomers = async () => {
            const authToken = await login();
            if (authToken) {
                await fetchCustomers(authToken);
                console.debug('authToken', authToken);
            }
        };

        authenticateAndFetchCustomers();

    }, []);


    const handleDeleteCustomer = (customer) => {
        const newCustomers = customers.filter(p => p.id != customer.id);
        setCustomers(newCustomers);
    };
    const [state, setState] = useState({
        totalPages: 5, // You can set this dynamically or statically
    });
    return (

        <div className='p-1 m-1'>
            <label className="custom-label" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', marginTop: '30px' }}>Customers</label>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>

                            <table className='table'>
                                <thead>
                                <tr>
                                    <th>Customer Id</th>
                                    <th>Name</th>
                                    <th>City</th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    Array.isArray(customers) && customers.map((customer) => (
                                        <tr key={customer.customerId}>
                                            <td className="middle-left">{customer.customerId}</td>
                                            <td className="middle-left">{customer.name}</td>
                                            <td className="middle-left">{customer.city}</td>
                                            <td>
                                                <Link  className='btn btn-outline-edit' to={`/updatecustomer/${customer.customerId}`}>
                                                    <FontAwesomeIcon icon={faPencil} ></FontAwesomeIcon>
                                                </Link>
                                                <button className='btn btn-outline-delete'>
                                                    <FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>

                            </table>
                            <div>
                                <Link className='btn btn-info m-2' to="/newcustomer"> New
                                </Link>
                            </div>
                            <ul className='nav nav-pills'>
                                {
                                    (new Array(state.totalPages).fill(0)).map((v, index) => (
                                        <li key={index}> {/* Add the unique key prop */}
                                            <button className='btn btn-outline-info'>{index + 1}</button>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default Customers;