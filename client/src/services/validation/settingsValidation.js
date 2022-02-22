import * as yup from 'yup';

const validationSettingsSchema = yup.object().shape({
  username: yup
    .string()
    .typeError('Must be a string')
    .required('Username is required')
    .min(3, 'min 3 symbols'),
  email: yup.string().email('Email is invalid').required('Email is required'),
});

export default validationSettingsSchema;
