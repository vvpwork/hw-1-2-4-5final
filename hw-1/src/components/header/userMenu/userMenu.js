import React, { Component, createRef } from 'react';
import Avatar from './userAvatar/Avatar';
import DropDown from './dropDown/DropDown';

import s from '../../../styles/userMenu.module.css';

export default class userMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDown: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindow);
    window.addEventListener('keydown', this.handleKeyDown);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDown } = this.state;

    return nextState.isDropDown !== isDropDown;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindow);
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = ev => {
    const { isDropDown } = this.state;
    if (ev.keyCode === 27 && isDropDown) this.closeDrop();
  };

  handleWindow = ev => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      ev.target,
    );
    const { isDropDown } = this.state;
    if (isDropDown && !isTargetInsideContainer) this.closeDrop();
  };

  hendleOpenDrop = () => {
    this.openDrop();
  };

  closeDrop = () => {
    this.setState({
      isDropDown: false,
    });
  };

  openDrop = () => {
    this.setState({
      isDropDown: true,
    });
  };

  render() {
    const { name, avatar } = this.props;
    const { isDropDown } = this.state;
    return (
      <div
        className={s.container}
        ref={this.containerRef}
        onClick={this.hendleOpenDrop}
      >
        <Avatar alt="avatar" width={50} heigth={50} src={avatar} />
        <span>{name}</span>
        {isDropDown && <DropDown />}
      </div>
    );
  }
}
