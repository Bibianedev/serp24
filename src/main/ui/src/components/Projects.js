import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {  Link } from 'react-router-dom';
import Select from 'react-select';
import React, { useState,useEffect } from 'react'
import ProjectService from '../services/ProjectService';


function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getProjects()

    }, [])

    const getProjects = () => {
        ProjectService.getProjects()
            .then(response => {
                console.debug("Projects data:", response.data);
                setProjects(response.data);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
            });
    }

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
            <label className="custom-label" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '15px', marginTop: '15px' }}>Entries</label>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>

                            <table className='table'>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Start</th>
                                    <th>End</th>
                                    <th>Status</th>
                                    <th>Customer</th>
                                    <th>Project Staff</th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    Array.isArray(projects) && projects.map(project => (
                                        <tr key={project.projectId}>
                                            <td className="middle-left">{project.projectId} </td>
                                            <td className="middle-left">{project.name}</td>
                                            <td className="middle-left">{project.start}</td>
                                            <td className="middle-left">{project.end}</td>
                                            <td className="middle-left">{project.status}</td>
                                            <td>
                                                <table className='table'>
                                                    <thead>
                                                    <tr>
                                                        <th>Project Id</th>
                                                        <th>Name</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        <tr >
                                                            <td>{project.customer.customerId}</td>
                                                            <td>{project.customer.name}</td>
                                                        </tr>
                                                    }
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td>
                                                <table className='table'>
                                                    <thead>
                                                    <tr>
                                                        <th>Consultant Id </th>
                                                        <th>Name</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {
                                                        Array.isArray(project.consultants) &&  project.consultants.map(consultant => (
                                                            <tr key={consultant.consultantId}>
                                                                <td>{consultant.consultantId}</td>
                                                                <td>{consultant.name}</td>
                                                            </tr>

                                                        ))
                                                    }
                                                    </tbody>
                                                </table>
                                            </td>

                                            <td  className="middle-left">
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
                                    <Link className='btn btn-info m-1' to="/newproject"> New
                                    </Link>
                                </div>
                                <Select className = 'm-1'
                                        placeholder='Select a Customer'
                                        options={options}
                                        labelField='id'
                                        isSearchable
                                        noOptionsMessage={() => 'No customer found..'}>
                                </Select>
                                <Select className = 'm-1'
                                        placeholder='Select a Customer'
                                        options={options}
                                        labelField='id'

                                        isSearchable
                                        noOptionsMessage={() => 'No customer found..'}>
                                </Select>
                            </div>
                            <ul className='nav nav-pills'>
                                {
                                    (new Array(state.totalPages).fill(0)).map((v,index)=>(
                                        <li key={index}>
                                            <button  className='btn btn-outline-info'>{index+1}</button>
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
export default Projects;