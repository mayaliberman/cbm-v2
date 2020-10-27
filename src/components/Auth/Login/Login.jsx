import React from 'react';
import useFormValidation from '../useFormValidation';
import validateLogin from '../validateLogin';
import styles from './Login.module.scss';
const INITIAL_STATE = {
  email: '',
  password: '',
};

const Login = (props) => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin);
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {errors.email && <p className='error-text'>{errors.email}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name='email'
          type='email'
          placeholder='Your email'
          autoComplete='off'
        />
        {errors.password && <p className='error-text'>{errors.password}</p>}
        <input
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className={errors.password && 'error-input'}
          name='password'
          type='password'
          placeholder='Choose a secure password'
        />
        <div>
          <button
            type='submit'
            className='button pointer mr2'
            disabled={isSubmitting}
            style={{ background: isSubmitting ? 'grey' : 'orange' }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
