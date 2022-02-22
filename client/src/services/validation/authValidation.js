import * as yup from 'yup';

const validationRegSchema = yup.object().shape({
  username: yup
    .string()
    // .typeError('Must be a string')
    .min(3, 'min 3 symbols')
    .max(10, 'max 10 symbols')
    .required('Username is required'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .typeError('Must be a string')
    .required('Password is required')
    .min(6, 'min 6 symbols'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords do not match')
    .required('Is required'),
});

export default validationRegSchema;
