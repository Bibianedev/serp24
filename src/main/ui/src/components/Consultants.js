import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import './style.css'
import ConsultantService from '../services/ConsultantService';


export default function Consultants() {


    const [consultants, setConsultants] = useState([])
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getConsultants()
    }, [])
    const getConsultants = () => {

        ConsultantService.getConsultants().then((response) => {
            setConsultants(response.data)
            console.log(response.data);
        })
    }

    const [selectedConsult, setSelectedConsult] = useState('Select a Consultant');
    const handleChange = (event) => {
        setSelectedConsult(event.target.value);
    };
    const handleDeleteCustomer = (consultant) => {
        const newConsultants = consultants.filter(p => p.id != consultant.id);
        setConsultants(newConsultants);
    };

    const options = [
        { label: 'red', value: 1 },
        { label: 'blue', value: 2 },
        { label: 'yellow', value: 3 }
    ]
    const [state, setState] = useState({
        totalPages: 5,
    });
    return (
        <div className='p-1 m-1'>
            <label className="custom-label" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>Consultant</label>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>

                            <table className='table'>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Projects
                                    </th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                {
                                    Array.isArray(consultants) && consultants.map(consultant => (
                                        <tr key={consultant.id}>
                                            <td className="middle-left" >{consultant.consultantId}

                                            </td>
                                            <td className="middle-left">{consultant.name}</td>

                                            <td>
                                                <table className='table'>
                                                    <thead>
                                                    <tr>
                                                        <th>ID</th>
                                                        <th>Name</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {

                                                        <tr >
                                                            <td></td>
                                                            <td>{consultant.projectName}</td>
                                                        </tr>
                                                    }
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td className="middle-left">
                                                <button className='btn btn-outline-edit'>
                                                    <FontAwesomeIcon icon={faPencil} ></FontAwesomeIcon>
                                                </button>
                                                <button className='btn btn-outline-delete'>
                                                    <FontAwesomeIcon icon={faTrash} ></FontAwesomeIcon>
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>

                            </table>
                            <div className=" ms-auto d-flex m-1 ">
                                <div>
                                    <Link className='btn btn-info m-1' to="/newconsultant"> New
                                    </Link>
                                </div>
                                <Select className='m-1'
                                        placeholder='Select a Customer'
                                        options={options}
                                        labelField='id'
                                        isSearchable
                                        noOptionsMessage={() => 'No customer found..'}>
                                </Select>
                                <Select className='m-1'
                                        placeholder='Select a Customer'
                                        options={options}
                                        labelField='id'

                                        isSearchable
                                        noOptionsMessage={() => 'No customer found..'}>
                                </Select>
                            </div>
                            <ul className='nav nav-pills'>
                                {
                                    (new Array(state.totalPages).fill(0)).map((v, index) => (
                                        <li key={index}>
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
