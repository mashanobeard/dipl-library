import { checkSchema } from 'express-validator';

const createSchema = checkSchema({
  username: {
    isLength: {
      errorMessage: 'Username should be at least 3 chars long',
      options: { min: 3 },
    },
  },
  email: {
    isEmail: {
      errorMessage: 'It should be in email syntax',
      bail: true,
    },
  },
  password: {
    isLength: {
      errorMessage: 'Password should be at least 7 chars long',
      options: { min: 7 },
    },
  },
});

export default createSchema;
