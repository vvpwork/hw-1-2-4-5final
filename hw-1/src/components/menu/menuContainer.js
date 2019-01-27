import React, { Component } from 'react';
import { connect } from 'react-redux';
import { asyncOperation, menuSelectors } from '../../redux/modules/menu';
//components
import Menu from './menu';

import s from '../../styles/filter.module.css'

class MenuContainer extends Component {
  state = {
    filter: '',
  };

  componentDidMount() {
    this.props.getMenu();
  }

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  filterMenu = (filter, menu = []) => {
    const filterMenu = menu.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filterMenu;
  };
  render() {
    const { filter } = this.state;
    return (
      <>
      <label className={s.container}>
        
        <input
        className={s.filter}
          type="text"
          name="filter"
          value={filter}
          placeholder="filter menu"
          onChange={this.handleChange}
        />
        </label>
        <Menu
          {...this.props}
          filterMenuList={() => this.filterMenu(filter, this.props.menuList)}
        />
      </>
    );
  }
}

const mapStateToProps = state => ({
  menuList: menuSelectors.getMenu(state),
});

const mapDispatchToProps = {
  getMenu: asyncOperation.fetchMenuItems,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MenuContainer);
