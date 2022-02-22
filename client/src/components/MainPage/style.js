import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '60px',
    flexDirection: 'row',
    justifyContent: 'column',
  },
  root: {
    maxWidth: 220,
    minWidth: 240,
    minHeight: 350,
    marginTop: '30px',
    marginRight: '30px',
  },

  media: {
    height: 340,
    width: 240,
  },
}));
