import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let parentComments = this.props.comments;

    return (
      <aside className='comments'>
        <h1>
          Comments
        </h1>

        <ul className='top-level-comments'>
          {parentComments.map(parentComment => (
            <li key={parentComment.id}
              className='top-level-comment'>

              <Comment key={parentComment.id}
                comment={parentComment} />

              <ul className='children'>
                {parentComment.children.map(childComment => (
                  <li key={parentComment.id}
                    className='child-comment'>
                    
                    <Comment key={childComment.id}
                      comment={childComment} />
                  </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </aside>
    );
  }
}
export default Comments;
