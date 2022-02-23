import React from 'react';
import {
  Container,
  Card,
  Typography,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import PropTypes from 'prop-types';
import useStyles from './style';
import HeaderContainer from '../../containers/HeaderContainer';

const BookPage = (props) => {
  const { book, handleRating, rating, message, length } = props;
  console.log(book);
  const classes = useStyles();

  return (
    <>
      <HeaderContainer />
      <Container className={classes.form}>
        <Card className={classes.card}>
          <CardMedia className={classes.media} image={book?.image} />
          <CardContent className={classes.content}>
            <Typography className={classes.title}>{book?.title}</Typography>
            <Typography className={classes.subtitle1}>
              {book?.author}
            </Typography>

            <Typography className={classes.subtitle2}>{book?.year}</Typography>
            {/* <Rating
              name="simple-controlled"
              value={rating}
              precision={0.2}
              onChange={handleRating}
            /> */}

            <Typography>
              <Rating
                name="simple-controlled"
                value={rating}
                precision={0.2}
                onChange={handleRating}
              />
            </Typography>

            <Typography>{message}</Typography>
            {/* <span>Total voted: {book.length}</span> */}

            <Typography className={classes.text}>
              {book?.description}
            </Typography>
            <Typography className={classes.genre}>{book?.genre}</Typography>
            <Typography>
              <div>Comments</div>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

BookPage.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  year: PropTypes.number,
  description: PropTypes.string,
  genre: PropTypes.string,
};

export default BookPage;
