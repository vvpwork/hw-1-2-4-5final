import React from 'react';
import SignUpContainer from '../components/formSignUp/signUpContainer';
import withRedirect from '../components/hoc/redirect';

const SignUpPage = () => (
  <>
    <SignUpContainer />
  </>
);

export default withRedirect(SignUpPage);
