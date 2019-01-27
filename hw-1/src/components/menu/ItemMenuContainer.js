import React, { Component } from 'react';
import { connect } from 'react-redux';

import { menuSelectors, asyncOperation } from '../../redux/modules/menu';
import { cartAction } from '../../redux/modules/shopingCart';
import ItemMenu from './ItemMenu';
import Button from '../common/button';
import routes from '../../configs/routes';

class MenuItem extends Component {
  componentDidMount() {
    const {
      getItemByID,
      match: {
        params: { id },
      },
    } = this.props;
    getItemByID(id);
  }

  returnMenuClick = () => {
    const { history } = this.props;
    history.push(routes.MENU);
  };

  render() {
    return (
      <>
        <ItemMenu {...this.props} />
        <Button value={'назад к меню'} click={this.returnMenuClick} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  items: menuSelectors.getItemById(state),
});

const mapDispatchToProps = {
  getItemByID: asyncOperation.fetchMenuItemsById,
  addToCart: cartAction.addToCart,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuItem);
