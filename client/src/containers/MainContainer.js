// import React from 'react';
// import { connect } from 'react-redux';

// import { useDispatch, useSelector } from 'react-redux';
// import { requestGetBooks } from '../actions/index';
// import MainPage from '../components/MainPage/MainPage';
// import { BookAllSelector } from '../selectors';

// const MainPageContainer = (props) => {
//   const { books } = props;

//   //const dispatch = useDispatch();
//   // const fetchBook = () => {
//   //   dispatch(requestGetBooks());
//   // };
//   // useEffect(() => {
//   //   dispatch(requestGetBooks());
//   // }, []);
//   const state = useSelector((state) => ({ ...state.books }));
//   console.log(state);
//   return <MainPage bookAll={books} />;
// };

// // export default MainPageContainer;
// const mapStateToProps = (state) => ({
//   books: BookAllSelector(state),
// });

// const mapDispatchToProps = (dispatch) => {
//   return {
//     requestGetBooks: () => dispatch(requestGetBooks()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(MainPageContainer);
import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { requestGetBooks } from '../actions/index';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';
import useStyles from '../components/MainPage/style';
import HeaderContainer from './HeaderContainer';

const MainPageContainer = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  // const fetchBook = () => {
  //   dispatch(requestGetBooks());
  // };
  useEffect(() => {
    dispatch(requestGetBooks());
  }, []);
  const state = useSelector((state) => ({ ...state.books }));

  return (
    <>
      <HeaderContainer />
      <Container className={classes.flex}>
        {state.books?.map((book, index) => {
          return (
            <Card className={classes.root} key={index}>
              <CardActionArea>
                <CardMedia className={classes.media} image={book.image} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="h5">
                    {book.author}
                  </Typography>
                  <Typography gutterBottom variant="subtitle2" component="h5">
                    {book.year}
                    <Typography gutterBottom variant="caption" component="h5">
                      {book.genre}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Link href={`/book/${book._id}`}>
                  <Button size="small" color="primary">
                    More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default MainPageContainer;
