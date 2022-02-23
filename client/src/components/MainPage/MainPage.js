import {
  Container,
  Button,
  Link,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';
import useStyles from './style';
const MainPage = (props) => {
  const { bookAll } = props;
  console.log(bookAll);

  const classes = useStyles();
  return (
    <>
      <Container className={classes.flex}>
        {bookAll.books?.map((book, index) => {
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
export default MainPage;
