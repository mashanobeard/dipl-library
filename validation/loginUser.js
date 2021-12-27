import { checkSchema } from 'express-validator';

const loginSchema = checkSchema({
  username: String,
  email: {
    isEmail: {
      bail: true,
    },
  },
  password: String,
});

export default loginSchema;
