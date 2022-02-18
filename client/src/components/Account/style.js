import { makeStyles } from '@material-ui/core/index';

export const useStyles = makeStyles((theme) => ({
  block: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  text: {
    fontStyle: 'Montserrat',
  },
  updateButton: {
    textTransform: 'none',
    backgroundColor: '#d8e2dc',
  },
  buttonBlock: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
  },
  formBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '40px',
  },
  avatarPic: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minWidth: '150px',
    minHeight: '150px',
    margin: '20px',
  },
  // fieldHint: {
  //   textAlign: 'left',
  //   fontSize: '14px',
  //   color: theme.palette.error.main,
  // },
  errorMessage: {
    color: 'red',
  },
}));
