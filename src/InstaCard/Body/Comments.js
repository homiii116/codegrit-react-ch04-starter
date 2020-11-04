import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const Comments = ({ data }) => {
  const { commentOne, commentTwo } = data;
  return(
    <ul className="comments">
      <Comment
        poster={commentOne.poster}
        comment={commentOne.body} />
      <Comment
        poster={commentTwo.poster}
        comment={commentTwo.body} />
    </ul>
  );
}

Comments.propTypes = {
  data: [
    {
      poster: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }
  ]
}

Comments.defaultProps = {
  data: {
    commentOne: {
      poster: "testuser1",
      body: "This is the insta-card!"
    },
    commentTwo: {
      poster: "testuser2",
      body: "So cool!"
    }
  }
}
export default Comments;