import {Schema} from 'express-validator';

export const signupValidator: Schema= {


  appUserEmail: {
    isEmail: {
      errorMessage: 'Please provide a valid email'
    },
    // Uncomment the next line to sanitize email, but it removes +1 from testing email addresses.
    // normalizeEmail: true,
    trim: true
  },
  appUserPassword: {
    isLength: {
      errorMessage: 'Password must be at least eight characters',
      options: {min: 8}
    },
    trim: true,
    escape: true
  },
  appUserPasswordConfirm: {
    isLength: {
      errorMessage: 'confirm password must be at least eight characters',
      options: {min: 8}
    },
    trim: true,
    escape: true
  }
}
