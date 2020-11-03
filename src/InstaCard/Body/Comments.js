import React from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';

const Comments = ({ data }) => {
  const { commentOne, commentTwo } = data;
  return(
    <ul className="comments">
      <Comment
        username={commentOne.username}
        comment={commentOne.usercomment} />
      <Comment
        username={commentTwo.username}
        comment={commentTwo.usercomment} />
    </ul>
  );
}

Comments.propTypes = {
  data: [
    {
      username: PropTypes.string.isRequired,
      usercomment: PropTypes.string.isRequired
    }
  ]
}

Comments.defaultProps = {
  data: {
    commentOne: {
      username: "testuser1",
      usercomment: "This is the insta-card!"
    },
    commentTwo: {
      username: "testuser2",
      usercomment: "So cool!"
    }
  }
}
export default Comments;