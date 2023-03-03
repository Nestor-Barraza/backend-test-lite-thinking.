"use strict";

module.exports = {
  INTERNAL_SERVER_ERROR: {
    message: 'Has ocurred to internal server error, please try again',
    code: 'INTERNAL_SERVER_ERROR'
  },
  ACCESS_DENIED: {
    message: 'You don\'t have authorization for the petition.',
    code: 'ACCESS_DENIED'
  },
  VERIFICATION_CODE_NOT_FOUND: {
    message: 'Verification code not found',
    code: 'VERIFICATION_CODE_NOT_FOUND'
  },
  PASSWORD_NOT_MATCH: {
    message: 'The password and confirmPassword does not match',
    code: 'PASSWORD_NOT_MATCH'
  },
  USER_NOT_FOUND: {
    message: 'User not found',
    code: 'USER_NOT_FOUND'
  },
  NOT_FOUND_EMAIL: {
    message: 'Email not found',
    code: 'NOT_FOUND_EMAIL'
  },
  NOT_MATCH_CREDENTIALS: {
    message: 'The credentials you entered do not match',
    code: 'NOT_MATCH_CREDENTIALS'
  },
  NOT_VALID_EMAIL: {
    message: 'Insert a valid email',
    code: 'NOT_VALID_EMAIL'
  },
  PAYMENT_FAILURE: {
    message: 'Transaction has been rejected',
    code: 'PAYMENT_FAILURE'
  },
  EMAIL_HAS_NOT_BEEN_VERIFIED: {
    message: 'The email entered has not been verified',
    code: 'EMAIL_HAS_NOT_BEEN_VERIFIED'
  },
  EMAIL_ALREADY_IS_REGISTERED: {
    message: 'The email entered already is registered',
    code: 'EMAIL_ALREADY_IS_REGISTERED'
  },
  INVALID_QUESTION_REQUEST: {
    message: 'It\'s not possible to create a question',
    code: 'INVALID_QUESTION_REQUEST'
  },
  INVALID_PARAGRAPH_REQUEST: {
    message: 'It\'s not possible to create a paragraph',
    code: 'INVALID_PARAGRAPH_REQUEST'
  },
  EMAIL_IS_REQUIRED: {
    message: 'It\'s not possible validate your credentials without a email.',
    code: 'EMAIL_IS_REQUIRED'
  },
  PASSWORD_IS_REQUIRED: {
    message: 'It\'s not possible validate your credentials without a password.',
    code: 'PASSWORD_IS_REQUIRED'
  },
  SHORT_CONTENT: {
    message: 'This field requires more characters.',
    code: 'SHORT_CONTENT'
  },
  SHORT_PASSWORD: {
    message: 'Password too short.',
    code: 'SHORT_PASSWORD'
  },
  EMPTY_PASSWORD: {
    message: 'No password entered.',
    code: 'EMPTY_PASSWORD'
  },
  FIELD_REQUIRED: {
    message: 'This field is required.',
    code: 'FIELD_REQUIRED'
  },
  TOKEN_REQUIRED: {
    message: 'The token is required.',
    code: 'TOKEN_REQUIRED'
  },
  INVALID_TOKEN: {
    message: 'The token has expired or is invalid',
    code: 'INVALID_TOKEN'
  },
  INVALID_ID: {
    message: 'This id is invalid',
    code: 'INVALID_ID'
  }
};