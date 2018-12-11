import React, { Component } from 'react';

import s from '../../styles/comments.module.css';

const selectValue = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default class Comments extends Component {
  state = {
    commentList: [],
    comment: '',
    rating: '',
  };

  handleChange = ({ target: { value, name } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.setState(prevState => {
      const userComment = {
        userCommit: prevState.comment,
        userRating: prevState.rating,
      };
      return { commentList: [...prevState.commentList, userComment] };
    });
  };

  render() {
    const { comment, rating, commentList } = this.state;

    return (
      <section className={s.section}>
        <form onSubmit={this.handleFormSubmit}>
          <p>Ваш отзыв</p>
          <textarea
            name="comment"
            value={comment}
            onChange={this.handleChange}
          />
          <p>Рейтинг</p>
          <select name="rating" value={rating} onChange={this.handleChange}>
            {selectValue.map(value => (
              <option>{value}</option>
            ))}
          </select>
          <button name="button" type="submit" className={s.btn}>
            добавить отзыв
          </button>
        </form>
        <ul>
          {commentList.map(({ userCommit, userRating }) => (
            <li>
              {' '}
              <p>{userCommit}</p>
              <p>pейтинг: {userRating}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
