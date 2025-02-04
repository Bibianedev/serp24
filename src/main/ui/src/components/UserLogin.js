import React from 'react'
import './style.css'
export default function UserLogin() {
    return (
        <div className='login template d-flex justify-content-center align-items-center  vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Sign In</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='Enter Email' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Email</label>
                        <input type='password' placeholder='Enter Password' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <input type='checkbox' className='custom-control custom-checkbox' id='ckeck'></input>
                        <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>

                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-info'> Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

