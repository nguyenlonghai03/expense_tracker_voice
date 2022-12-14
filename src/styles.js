import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  desktop: { // Trên kích thước mobile thì moi ẩn còn mobile là hiện ra
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobile: { 
    // Dưới kích thước sm thì ẩn đi
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  main: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: '5%',
    },
  },
  last: {
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
      paddingBottom: '200px',
    },
  },
  grid: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));