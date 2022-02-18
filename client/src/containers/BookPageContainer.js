import React, { useEffect } from 'react';
//import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { requestGetBook } from '../actions/index.js';
import { useDispatch, useSelector } from 'react-redux';
//import BookPage from '../components/BookPage/BookPage';
import {
  Container,
  Card,
  Typography,
  CardMedia,
  CardContent,
  Divider,
} from '@material-ui/core/';

import useStyles from '../components/BookPage/style';

//import { BookSelector } from '../selectors/index.js';

const BookPageContainer = (props) => {
  const classes = useStyles();

  console.log(props, 'props');

  const { id } = useParams();

  // useEffect(() => {
  //   requestGetBook(id);
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetBook(id));
  }, []);

  // const state = useSelector((state) => ({ ...state.books }));
  const book = useSelector((state) => ({ ...state.books }));
  console.log(book, 'bo2k');

  return (
    <>
      <Container className={classes.form}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={book.image} />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{book.title}</Typography>
            <Typography className={classes.subtitle1}>{book.author}</Typography>

            <Typography className={classes.subtitle2}>{book.year}</Typography>
            <Typography className={classes.text}>{book.description}</Typography>
            <Typography className={classes.genre}>{book.genre}</Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};
// const mapStateToProps = (state) => ({
//   book: state.books.book,
//   // currentBook: BookSelector(state),
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     requestGetBook: (id) => dispatch(requestGetBook(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(BookPageContainer);
export default BookPageContainer;
