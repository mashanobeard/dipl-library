import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestGetBook } from '../actions/index.js';
import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Card,
  Typography,
  CardContent,
  CardMedia,
} from '@material-ui/core/';
import HeaderContainer from './HeaderContainer.js';
import useStyles from '../components/BookPage/style';

const BookPageContainer = (props) => {
  console.log(props, 'props');
  const classes = useStyles();
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGetBook(id));
  }, []);
  const book = useSelector((state) => ({ ...state.books }));
  console.log(book, 'bo2k');

  return (
    <>
      <HeaderContainer />
      <Container className={classes.form}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={book.image} />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{book.title}</Typography>
            <Typography className={classes.subtitle1}>{book.author}</Typography>

            <Typography className={classes.subtitle2}>{book?.year}</Typography>
            {/* <Rating
              name="simple-controlled"
              precision={0.2}
            /> */}

            <Typography className={classes.text}>{book.description}</Typography>
            <Typography className={classes.genre}>{book.genre}</Typography>
            <Typography></Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default BookPageContainer;
