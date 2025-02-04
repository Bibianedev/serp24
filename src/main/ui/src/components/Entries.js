import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  Link } from 'react-router-dom';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react'

export default function Entries() {
    const [consultants, setConsultants] = useState([
        { id: 1, name: "Martin", hour: "23:00", project: "ert", consultant: "braunchweig" },
        { id: 2, name: "Yvette", hour: "23:00", project: "evc", consultant: "braunchweig" },

    ])

    const [consults, setConsults] = useState([
        { id: 1, name: "Martin" },
        { id: 2, name: "Yvette" },

    ])
    const [products, setProducts] = useState([
        { id: 1, name: "Martin" },
        { id: 2, name: "Yvette" },

    ])
    const [state, setState] = useState({
        totalPages: 5,
    });

    return (
        <div className='p-1 m-1'>
            <label className="custom-label" style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '20px', marginTop: '20px' }}>Entries</label>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>

                            <table className='table'>
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Date</th>
                                    <th>Hours</th>
                                    <th>Project</th>
                                    <th>Consultant</th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                {
                                    consultants.map(consultant => (
                                        <tr key={consultant.id}>
                                            <td className="middle-left">{consultant.id} </td>
                                            <td className="middle-left">{consultant.name}</td>
                                            <td className="middle-left">{consultant.hour}</td>

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
                                                        products.map(product => (
                                                            <tr key={product.id}>
                                                                <td>{product.id}</td>
                                                                <td>{product.name}</td>
                                                            </tr>

                                                        ))
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
                                                        consults.map(consult => (
                                                            <tr key={consult.id}>
                                                                <td>{consult.id}</td>
                                                                <td>{consult.name}</td>
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
                                            </td>
                                        </tr>
                                    ))
                                }
                                </tbody>
                                <div>
                                    <Link className='btn btn-info m-1' to="/newcustomer"> New
                                    </Link>
                                </div>
                            </table>
                            <ul className='nav nav-pills '>
                                {
                                    (new Array(state.totalPages).fill(0)).map((v,index)=>(
                                        <li>
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

