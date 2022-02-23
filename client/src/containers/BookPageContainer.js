import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  requestGetBook,
  requestGetRating,
  requestPostRating,
} from '../actions/index.js';
import BookPage from '../components/BookPage/BookPage';
import { BookSelector } from '../selectors/index';

const BookPageContainer = (props) => {
  const {
    requestGetBook,
    currentBook,
    username,
    message,
    rating,
    requestGetRating,
    requestPostRating,
  } = props;
  console.log(props, 'props');

  const { id } = useParams();

  useEffect(() => {
    requestGetBook(id);
    requestGetRating(id);
  }, []);

  const handleRating = (e) => {
    const totalRating = {
      user: username,
      rating: e.target.value,
      bookId: currentBook._id,
    };
    requestPostRating(totalRating);
    requestGetRating(id);
  };

  return (
    <BookPage
      book={currentBook}
      message={message}
      handleRating={handleRating}
      rating={rating}
      //length={currentBook.length}
    />
  );
};
const mapStateToProps = (state) => ({
  username: state.user.username,
  rating: state.rating.rating,
  message: state.rating.message,

  currentBook: BookSelector(state),
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestGetBook: (id) => dispatch(requestGetBook(id)),
    requestPostRating: (rating) => dispatch(requestPostRating(rating)),
    requestGetRating: (id) => dispatch(requestGetRating(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookPageContainer);
// export default BookPageContainer;
