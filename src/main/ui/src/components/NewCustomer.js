import React, { useEffect, useState, useMemo } from "react";
import CustomerService from "../services/CustomerService";
import {useNavigate } from 'react-router-dom'

function NewCustomer() {

    const [name, setName]= useState('')
    const [city, setCity]= useState('')
    const customerService = new CustomerService();

    const navigate = useNavigate();

    const saveCustomer=(e)=>{
        e.preventDefault();
        const customer ={name,city}

        customerService.createCustomer(customer).then((response) =>{
            console.log(response.data)

            navigate('/customers')

        }).catch(error=>{
            console.error('Error creating a customer:', error);
        })
    }

    return (
        <div className="row p-5">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h2>Add Customer </h2>
                        <form onSubmit={saveCustomer}>

                            <div className="mb-3">
                                <label className="form-label">Name :</label>
                                <input className="form-control"
                                       type='text'
                                       name='name'
                                       value={name}
                                       onChange={(e)=>setName(e.target.value)}
                                >

                                </input>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">City :</label>
                                <input className="form-control"
                                       ype='text'
                                       name='city'
                                       value={city}
                                       onChange={(e)=>setCity(e.target.value)}></input>
                            </div>

                            <button className="btn btn-info" >Save</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NewCustomer;