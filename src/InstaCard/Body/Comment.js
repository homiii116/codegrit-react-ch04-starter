import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ username, comment }) => (
  <li className="poster-comment">
    <a className="commenter-name">
      {username}
    </a>
    <span className="commenter-comment">
      {comment}
    </span>
  </li>
);

Comment.propTypes = {
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

Comment.defaultProps = {
  username: "testuser",
  comment: "テストのコメント",
}

export default Comment;
