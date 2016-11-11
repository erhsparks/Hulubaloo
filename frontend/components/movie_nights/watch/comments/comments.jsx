import React from 'react';
import Comment from './comment';
import CommentFormContainer from './comment_form_container';

class Comments extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let parentComments = this.props.comments;
    let me = this.props.currentUsername;

    return (
      <aside className='comments'
        style={{maxHeight: `${$('.masthead').height() + $('.video-info').height() + 69}px`}}>
        <header className='category-header'>
          <h1>
            Comments
          </h1>
        </header>

        <ul className='top-level-comments'>
          <li key='form' className='top-level-comment-form'>
            <CommentFormContainer />
          </li>

          <div className='scrolly-box'>
            {parentComments.map(parentComment => (
              <li key={parentComment.id}
                className='top-level-comment'>

                <Comment comment={parentComment} me={me} />

                <ul className='children'>
                  {parentComment.children.map(childComment => (
                    <li key={childComment.id}
                      className='child-comment'>

                      <Comment comment={childComment} me={me} />
                    </li>
                    ))}

                    <li key='form' className='nested-comment-form'>
                      <CommentFormContainer parentId={parentComment.id} />
                    </li>
                </ul>
              </li>
            ))}
          </div>
        </ul>
      </aside>
    );
  }
}
export default Comments;
