import React from 'react';

const Comment = ({ comment }) => (
  <div>
    <h2>
      {comment.username}
    </h2>

    <p>
      {comment.body}
    </p>

    <aside>
      {`at ${comment.hours_in}:${comment.minutes_in}:${comment.seconds_in}`}
    </aside>
  </div>
);

export default Comment;
