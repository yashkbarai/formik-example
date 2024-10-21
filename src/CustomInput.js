import React from 'react';

const CustomInput = ({ label, name, formik, type = 'text' }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values[name]}
            />
            {formik.errors[name] && formik.touched[name] ? (
                <div style={{ color: 'red' }}>{formik.errors[name]}</div>
            ) : null}
        </div>
    );
};

export default CustomInput;
