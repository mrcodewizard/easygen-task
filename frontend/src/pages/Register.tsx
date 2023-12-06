import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import EmailIcon from '@material-ui/icons/MailOutline';
import PersonIcon from "@material-ui/icons/PersonOutlined";
import LockIcon from '@material-ui/icons/LockOpen';
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import  GoogleIcon  from "@material-ui/icons/Twitter";
import "../assets/css/auth.css";

function Register() {
  const formik = useFormik({
     initialValues: {
       name: '',
       email: '',
       password: '',
     },
     onSubmit: values => {
       alert(JSON.stringify(values, null, 2));
     },
   });
   
  const { handleChange, handleSubmit, values } = formik;

  return (
    <div className="account-wrapper">
        <div className="breadcrumb-holder">
            <div className="breadcrumb-caption">
                <h2>Register</h2>
                <ul>
                    <li className="breadcrumb-item">
                        <a href="/" className="breadcrumb-link">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <span>Register</span>
                    </li>
                </ul>
                
            </div>
        </div>
        <div className="account-content">
            <Row className="flex-row">
                <Col sm={6}>
                    <div className="account-inner">
                            <div className="section-title">
                                <div className="title-upper">
                                    <h3 className="account-heading">Register Here</h3>
                                    <div className="separator"></div>
                                </div>
                            </div>
                            
                            <form className="account-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <input type="text" name="name" className="form-control" placeholder='Enter Your Name' 
                                    onChange={handleChange} value={values.name} />
                                    <span className="icon"><PersonIcon /></span>
                                </div>
                                <div className="form-group">
                                    <input type="email" name="email" className="form-control" placeholder='Enter Your Email' 
                                    onChange={handleChange} value={values.email} />
                                    <span className="icon"><EmailIcon /></span>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password" className="form-control" placeholder='Password' 
                                    onChange={handleChange} value={values.password} />
                                    <span className="icon"><LockIcon /></span>
                                </div>
                                <div className="form-bottom">
                                    <div className="action">
                                        <button className="btn btn-login">
                                            <span className="text">Register Here</span>
                                        </button>
                                    </div>
                                    <div className="form-footer">
                                      <p>Already a valued member ? <a href="/login">Sign In</a></p>
                                    </div>
                                </div>
                            </form>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Register