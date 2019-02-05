import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { authSelectors } from '../../redux/modules/auth';

const withRedirect = WrappedComponent => {
  class RedirectComponent extends PureComponent {
    render() {
      const { isAuthenticated, location } = this.props;
      const path = location.state ? location.state.from.pathname : '/account';
      return isAuthenticated ? (
        <Redirect to={path} />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return connect(
    state => ({ isAuthenticated: authSelectors.isAuthenticated(state) }),
    null,
  )(RedirectComponent);
};

export default withRedirect;
