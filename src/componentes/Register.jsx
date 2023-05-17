import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './stylado.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es obligatorio'),
    password: Yup.string().required('La contraseña es obligatoria'),
    email: Yup.string().email('Correo electrónico inválido').required('El correo electrónico es obligatorio'),

});

const Register = () => {
    const handleSubmit = (values) => {
        // Lógica de envío del formulario
        console.log(values);
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <section>
            <Form className='login-box'>
                <div className='form-contet'>
                    <div className='box-register'>
                    <Link to='/'><FontAwesomeIcon icon={faArrowLeft} fontSize={'50px'} /></Link>
                    </div>
                    <div className='form-text'>
                    <h1>Registro</h1>
                    <h2>crea tu cuenta gratuitamente y recibe las mejores promociones</h2>
                    </div>
                </div>
                <div className='user-box'>
                    <label htmlFor="name">Usuario</label>
                    <Field type="text" id="name" name="name" />
                    <ErrorMessage name="name" component="div" className='error-Message' />
                </div>

                <div className='user-box'>
                    <label htmlFor="email">Correo electrónico</label>
                    <Field type="email" id="email" name="email"/>
                    <ErrorMessage name="email" component="div" className='error-Message' />
                </div>
                <div className='user-box'>
                    <label htmlFor="password">Contraseña</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component="div" className='error-Message' />
                </div>
                <button type="submit">Registrarse</button>
                <p>Tienes cuenta? <Link to='/login'>logueate</Link></p>
            </Form>
            </section>
        </Formik>
    );
};

export default Register;