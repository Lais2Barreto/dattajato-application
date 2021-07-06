import React from 'react';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../assets/css/App.css'
import './Login.css';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

const Login = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:8080/v1/api/auth', values) 
    .then(resp => console.log(resp))
  }
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  return (
    <>
    <Header />
    <h2 className="App-subtitulo">Login</h2>
    <Formik initialValues={{}} 
      onSubmit={handleSubmit} 
      validationSchema={validations}>

      <Form className="Form">
        <div className="Form-group">
          <label className="input-label" htmlFor="email">Email:</label>
          <Field 
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email" 
            className="Login-field"
          />
          <ErrorMessage 
            component="span" 
            name="email" 
            className="Login-error"
          />

          <label className="input-label" htmlFor="password">Senha:</label>
          <Field 
            id="password"
            name="password" 
            type="password"
            placeholder="Digite sua senha"
            className="Login-field"
          />
          <ErrorMessage 
            component="span" 
            name="password" 
            className="Login-error"
          />

          <button type="submit" className="Login_btn">Login</button>
        </div>
    
      </Form>
    </Formik>
    <Footer />
    </>
  )  
}
export default Login