import React from 'react'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import "./register.css"
import {Link} from "react-router-dom"
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Register() {
    const {handleSubmit, handleChange, handleReset, handleBlur, values, touched, errors} = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            address:'',
            city:'',
            state:'',
            zip:''

        },
        validationSchema:Yup.object({
            firstName:Yup.string()
            .max(15,'Must be 15 characters or less')
            .required('First name Required'),
            lastName:Yup.string()
            .max(15,'Must be 15 characters or less')
            .required('First name Required'),
            email:Yup.string()
            .email('Invalid email address')
            .required('Email Required'),
            password:Yup.string()
            .min(6,'Must be 6 charcters or more')
            .required('Password is Required'),
            address:Yup.string()
            .required('Address is Required'),
            city:Yup.string()
            .required('City is Required'),
            state:Yup.string()
            .required('State is Required'),
            zip:Yup.string()
            .required('Zip is Required')


        }),
        onSubmit:(values) => {
            console.log(values);
        }

    })
    return (
        <>
            <Header />
            <div className="lead-text">
                <h3>NEW CUSTOMER</h3>
            </div>
            <div className='register-wrapper'>
                <p>Already Registered <Link to='/login'>Login</Link></p>
                <hr />
                
                <button className='btn btn-danger d-block w-100 mb-2'>Login with Google</button>
                <button className='btn btn-primary d-block w-100'>Login with Facebook</button>
                <hr />
                <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                        <label htmlFor="firstName" className="form-label">First Name</label>
                        <input type="text" onChange={handleChange} value={values.firstName} onBlur={handleBlur} name="firstName" className="form-control" id="firstName" />
                    <p className='error'>{errors.firstName}</p>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="lastName" className="form-label">Last Name</label>
                        <input type="text" onChange={handleChange} value={values.lastName} onBlur={handleBlur} name="lastName" className="form-control" id="lastName" />
                        <p className='error'>{errors.lastName}</p>
                    
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email"  onChange={handleChange} value={values.email} onBlur={handleBlur} name='email' className="form-control" id="email" />
                        <p className='error'>{errors.email}</p>
                    
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password"  onChange={handleChange} value={values.password} onBlur={handleBlur} name='password' className="form-control" id="password" />
                        <p className='error'>{errors.password}</p>
                   
                    </div>
                    <div className="col-12">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text"  onChange={handleChange} value={values.address} onBlur={handleBlur} name='address' className="form-control" id="address" placeholder="1234 Main St" />
                        <p className='error'>{errors.address}</p>
                   
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="city" className="form-label">City</label>
                        <input type="text"  onChange={handleChange} value={values.city} onBlur={handleBlur} name='city' className="form-control" id="city" />
                        <p className='error'>{errors.city}</p>
                  
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="state" className="form-label">State</label>
                        <select id="state"  onChange={handleChange} value={values.state} onBlur={handleBlur} name='state' className="form-select">
                            <option>Choose...</option>
                            <option>Kerala</option>
                            <option>Tamilnad</option>
                            <option>Karnataka</option>
                            <option>Andrapradesh</option>
                            <option>Goa</option>
                        </select>
                    <p className='error'>{errors.state}</p>

                    </div>
                    <div className="col-md-2">
                        <label htmlFor="zip" className="form-label">Zip</label>
                        <input type="text"  onChange={handleChange} value={values.zip} onBlur={handleBlur} name='zip' className="form-control" id="zip" />
                        <p className='error'>{errors.zip}</p>
                    
                    </div>
  
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">Register Now</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Register