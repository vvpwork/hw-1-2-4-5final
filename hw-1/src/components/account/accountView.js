import React from 'react';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/modules/auth';
import UserInfo from './userInfo';
import ChangeUserInfo from './changeUserInfo';

import s from '../../styles/account.module.css';
// import passProps from '../hoc/passProps'

const Account = props => (
  <div className={s.container}>
    <UserInfo {...props} />
    <ChangeUserInfo />
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.userName(state),
  email: authSelectors.userEmail(state),
  id: authSelectors.userId(state),
  photo:
    'https://image.shutterstock.com/image-vector/hero-mask-on-red-background-450w-389497207.jpg',
});

export default connect(
  mapStateToProps,
  null,
)(Account);
