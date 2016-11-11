import React from 'react';

class CommentForm extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      body: ''
    };

    this.updateParam = this.updateParam.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateParam () {
    return e => this.setState({
      ['body']: e.currentTarget.value
    });
  }

  handleSubmit (e) {
    e.preventDefault();

    const comment = this.state;
    comment.movie_night_id = this.props.movieNightId;
    if (this.props.parentId) {
      comment.parent_id = this.props.parentId;
    }
    this.props.createComment({comment});
    this.refs.body.value = '';
  }

  render () {
    if (this.props.parentId) {
      return (
        <form className='new-comment-form'>
          <a type='submit'
            className='fake-button'
            onClick={this.handleSubmit} >
            Reply
          </a>

          <textarea ref='body'
            placeholder='...'
            onChange={this.updateParam()} />
        </form>
      );
    } else {
      return (
        <form className='new-comment-form'>
          <textarea ref='body'
            placeholder='Join the conversation...'
            onChange={this.updateParam()} />

          <a type='submit'
            className='fake-button'
            onClick={this.handleSubmit} >
            Post
          </a>
        </form>
      );
    }
  }
}

export default CommentForm;
