import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  //   flex: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     marginTop: theme.spacing(8),
  //   },
  //   root: {
  //     padding: theme.spacing(3),
  //     textAlign: 'left',
  //     maxWidth: 220,
  //     minWidth: 240,
  //     minHeight: 350,
  //     marginTop: '30px',
  //     marginRight: '30px',
  //   },

  media: {
    height: '440px',
    width: '740px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '40px',
  },

  content: {
    padding: theme.spacing(3),
    textAlign: 'left',
  },
  title: {
    margin: '15px',
    fontSize: '40px',
    fontWeight: 'bold',
  },
  subtitle1: {
    margin: '15px',
    fontSize: '16px',
    fontWeight: 'lighter',
    fontStyle: 'italic',
  },
  subtitle2: {
    margin: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#e76f51',
  },

  text: {
    margin: '15px',

    fontSize: '14px',
  },
  genre: {
    margin: '15px',

    textDecoration: 'underline',
    fontWeight: '600',
  },
  card: {
    display: 'flex',
  },
}));

export default useStyles;
