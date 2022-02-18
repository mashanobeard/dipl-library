import * as yup from 'yup';

const validationLogSchema = yup.object().shape({
  username: yup
    .string()
    .typeError('Must be a string')
    .required('Username is required')
    .min(3, 'min 3 symbols'),
  email: yup.string().email('Email is invalid').required('Email is required'),
  password: yup
    .string()
    .typeError('Must be a string')
    .required('Password is required')
    .min(6, 'min 6 symbols'),
});

export default validationLogSchema;
