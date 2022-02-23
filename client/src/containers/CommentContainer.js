import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router';

import Comment from '../components/Comments/CommentComponent';
import { requestPostComment, requestGetComment } from '../actions/index';

const CommentContainer = (props) => {
  const {
    username,
    requestGetComment,
    requestPostComment,
    comments,
    currentBook,
    pic,
  } = props;

  const [comment, setComment] = useState('');

  const { id } = useParams();

  useEffect(() => {
    requestGetComment(id);
  }, []);

  const handleComment = () => {
    const myComment = {
      postedBy: username,
      content: comment,
      bookId: currentBook.id,
      pic: pic,
    };
    requestPostComment(myComment);
    setComment('');
  };

  return (
    <Comment
      username={username}
      comment={comment}
      setComment={setComment}
      handleComment={handleComment}
      comments={comments}
      pic={pic}
    />
  );
};

const mapStateToProps = (state) => ({
  username: state.user.username,
  comments: state.comment.state,
  currentBook: state.books.book,
  pic: state.user.pic,
});

const mapDispatchToProps = (dispatch) => ({
  requestPostComment: (comment) => dispatch(requestPostComment(comment)),
  requestGetComment: (id) => dispatch(requestGetComment(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
