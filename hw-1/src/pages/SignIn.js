import React from 'react';
import withRedirect from '../components/hoc/redirect';

import SignInContainer from '../components/formSignIn/SignInContainer';

const SignIn = props => (
  <>
    <SignInContainer {...props} />
  </>
);

export default withRedirect(SignIn);
