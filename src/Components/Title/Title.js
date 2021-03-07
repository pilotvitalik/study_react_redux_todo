import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#b83f45',
  },
}))

function Title(){
  const classes = useStyles();
  return(
    <Grid 
      container
      item
      xs={12}
      justify={'center'}
      className={classes.root}>
      <Typography variant={'h3'}>
        Todos
      </Typography>
    </Grid>
  );
}

export default Title;