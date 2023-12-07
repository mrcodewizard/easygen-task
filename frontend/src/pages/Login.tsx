import React, { useState }from 'react'
import { useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useFormik } from 'formik';
import axios from "axios";
import EmailIcon from '@material-ui/icons/MailOutline';
import PersonIcon from "@material-ui/icons/PersonOutlined";
import LockIcon from '@material-ui/icons/LockOpen';
import "../assets/css/auth.css";

function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const formik = useFormik({
     initialValues: {
       email: '',
       password: '',
     },
     onSubmit: (values) => {
       const { email, password } = values;
       axios.post(`${process.env.REACT_APP_SERVER_URL}/login`, values)
        .then(res => {
            if(res && res.data["status"] == 200) {
                localStorage.setItem("_token", res.data.user["token"]);
                navigate("/dashboard");
            } else {
                setError(res.data.msg);
            }
        })
        .catch(err => {
            console.log("err", err);
            setError(err.message);
        })
     },
   });

   const { handleChange, handleSubmit, values } = formik;

  return (
    <div className="account-wrapper">
        <div className="breadcrumb-holder">
            <div className="breadcrumb-caption">
                <h2>Login</h2>
                <ul>
                    <li className="breadcrumb-item">
                        <a href="/" className="breadcrumb-link">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                        <span>Login</span>
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
                                <h3 className="account-heading">Login Now</h3>
                                <div className="separator"></div>
                            </div>
                        </div>

                        {
                            error && <div className="alert alert-danger">
                                { error }
                            </div>
                        }
                        
                        <form className="account-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control" placeholder='Email Address'
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
                                    <button className="btn btn-login" type="submit">
                                        <span className="text">Login Now</span>
                                    </button>
                                </div>
                                <div className="form-footer">
                                    <p>Be our valuable member ! <a href="/register">Sign Up</a></p>
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

export default Login