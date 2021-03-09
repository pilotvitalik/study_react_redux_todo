import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  actions:{
    "@media (min-width: 1200px)":{
      color: 'red',
    }
  }
}));

function AdditionalParams(){
  const classes = useStyles();

  return(
    <Grid container item xs={12} direction={'row'} wrap={'wrap'}>
      <Grid item xs={12} sm={3}>
        <Typography variant={'subtitle1'} className={classes.actions}>Осталось задач:</Typography>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant={'subtitle1'}>Выберите действие:</Typography>
      </Grid>
      <Grid container item xs={12} sm={6} direction={'row'} wrap={'wrap'}>
        <Grid item xs={6}>
          <Typography variant={'subtitle1'}>Фильтр по статусам:</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant={'subtitle1'}>Фильтр по цветам:</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AdditionalParams;