import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class extends Component {
  static propTypes = {
    comment: PropTypes.string,
    chosenId: PropTypes.number
  }
  static defaultProps = {
    chosenId: 1
  }
  state = {
    comment: "実はコメントを書いているところです。"
  }
  componentDidUpdate(prevProps) {
    // chosenIdが変わったらコメントを空にしましょう。
    console.log(prevProps);
    if(this.props.chosenId !== prevProps.chosenId) {
      this.setState({
        comment: ''
      })
    }
  }

  render() {
    const { comment } = this.state;
    return (
      <section className="comment-box">
        <div className="comment-area">{comment === '' ? "コメントする" : comment}</div>
      </section>
    );
  }
}