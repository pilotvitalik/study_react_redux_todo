import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import ActionsTasks from './ActionsTasks/ActionsTasks';
import RemainTasks from './RemainTasks/RemainTasks';
import FilterStatus from './FilterStatus/FilterStatus';
import FilterColor from './FilterColor/FilterColor';

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
        <FilterStatus/>
        <FilterColor/>
      </Grid>
    </Grid>
  )
}

export default AdditionalParams;