import React from 'react';

const Comment = ({ comment, me }) => (
  <div className={`comment${(me === comment.username) ? ' me' : ''}`}>
    <div className='comment-head'>
      <h2>
        {comment.username}
      </h2>

      <p>
        at
      </p>

      <p className='timestamp'>
        {` ${comment.hours_in}:${comment.minutes_in}:${comment.seconds_in}`}
      </p>
    </div>

    <p className='comment-body'>
      {comment.body}
    </p>
  </div>
);

export default Comment;
