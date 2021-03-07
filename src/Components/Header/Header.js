import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#764abc',
    color: '#fff',
    padding: '15px 0',
  },
  text:{
    fontWeight: '600',
  }
}))

function Header(){
  const classes = useStyles();
  return(
    <Grid 
      container
      item
      xs={12}
      justify={'center'}
      className={classes.root}>
      <Typography variant={'h3'} className={classes.text}>
        Redux counter
      </Typography>
    </Grid>
  );
}

export default Header;