import { makeStyles } from '@material-ui/core/styles';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rightToolbar: {
    position: 'absolute',
    right: '0',
    marginRight: '20px',
  },
  title: {
    marginRight: theme.spacing(2),
  },
  color: {
    background: '#b08968',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  avatar: {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    margin: `0 6px`,
  },
}));

export default useStyles;
