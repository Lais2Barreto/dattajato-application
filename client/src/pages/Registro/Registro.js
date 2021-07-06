import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import '../../assets/css/App.css';
import './Registro.css';
import { ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {history} from '../../history'

const Registro = () => {
  const handleSubmit = values => {
    axios.post('http://localhost:3000/v1/api/auth', values) 
    .then(resp => {
      const { data } = resp
      if(data) {
        localStorage.setItem('app-token', data)
        history.pushState('/')
      }
    })
  }
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).required()
  })
  return (
    <>
    <Header />
    <h2 className="App-subtitulo">Registro</h2>
    <Formik initialValues={{}} 
      onSubmit={handleSubmit} 
      validationSchema={validations}>

      <Form className="Form">
        <div className="Form-group">
          <label className="input-label" htmlFor="firstName">Nome:</label>
          <Field 
            id="firstName"
            name="firstName" 
            type="text"
            placeholder="Digite seu nome"
            className="Login-field"
            required
          />
          <ErrorMessage 
            component="span" 
            name="firstName" 
            className="Login-error"
          />

          <label className="input-label" htmlFor="lastName">Sobrenome:</label>
          <Field 
            id="lastName"
            name="lastName"
            type="lastName"
            placeholder="Digite seu sobrenome" 
            className="Login-field"
            required
          />
          <ErrorMessage 
            component="span" 
            name="lastName" 
            className="Login-error"
          />

          <label className="input-label" htmlFor="email">Email:</label>
          <Field 
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email" 
            className="Login-field"
            required
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
            required
          />
          <ErrorMessage 
            component="span" 
            name="password" 
            className="Login-error"
          />

          <button type="submit" className="Login_btn">Registrar</button>
        </div>
    
      </Form>
    </Formik>
    <Footer />
    </>
  )
}  
export default Registro




