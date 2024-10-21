import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomInput from './CustomInput';

const MyForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <CustomInput label="Name" name="name" formik={formik} />
            <CustomInput label="Email" name="email" formik={formik} type="email" />
            <CustomInput label="Password" name="password" formik={formik} type="password" />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;
