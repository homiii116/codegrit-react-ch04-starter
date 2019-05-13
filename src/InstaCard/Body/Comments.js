import React from 'react';
import Comment from './Comment';

const Comments = () => (
  <ul className="comments">
    <Comment
      username="testuser1"
      comment="This is the insta-card!" />
    <Comment
      username="testuser2"
      comment="So cool!" />
  </ul>
);

export default Comments;