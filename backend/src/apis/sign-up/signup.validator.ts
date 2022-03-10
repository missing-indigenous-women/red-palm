import {Schema} from 'express-validator';

export const signupValidator: Schema= {

  appUserLastName: {
    isLength: {
      errorMessage: 'please enter last name',
    },
    trim: true,
    escape: true
  },

  appUserFirstName: {
    isLength: {
      errorMessage: 'please enter first name',
    },
    trim: true,
    escape: true
  },
  appUserDisplayName: {
    isLength: {
      errorMessage: 'please enter display name ',
    },
    trim: true,
    escape: true
  },
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
