import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import ActionsTasks from './ActionsTasks/ActionsTasks';
import RemainTasks from './RemainTasks/RemainTasks';

const useStyles = makeStyles((theme) =>({
  filters:{
    [theme.breakpoints.up('md')]:{
      order: 3,
    }
  },
}));

function AdditionalParams(){
  const classes = useStyles();

  return(
    <Grid container item xs={12} direction={'row'} wrap={'wrap'}>
      <RemainTasks/>
      <ActionsTasks/>
      <Grid container item xs={12} md={6} direction={'row'} wrap={'wrap'} className={classes.filters}>
        <Grid item xs={6}>
          <Typography variant={'subtitle1'}>Фильтр по статусам:</Typography>
        </Grid>
        <Grid item xs={6} className={classes.color}>
          <Typography variant={'subtitle1'}>Фильтр по цветам:</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default AdditionalParams;