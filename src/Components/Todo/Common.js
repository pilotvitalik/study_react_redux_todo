import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import EnterTask from './EnterTask/EnterTask';
import TodoList from './TodoList/TodoList';
import AdditionalParams from './AdditionalParams/AdditionalParams';

const useStyles = makeStyles((theme) => ({
  root:{
    background: '#fff',
    '-webkit-box-shadow': '6px 1px 6px 0px rgba(50, 50, 50, 0.5), -6px 1px 6px 0px rgba(50, 50, 50, 0.5), 0px 6px 6px 0px rgba(50, 50, 50, 0.5)',
    '-moz-box-shadow': '6px 1px 6px 0px rgba(50, 50, 50, 0.5), -6px 1px 6px 0px rgba(50, 50, 50, 0.5), 0px 6px 6px 0px rgba(50, 50, 50, 0.5)',
    'box-shadow': '6px 1px 6px 0px rgba(50, 50, 50, 0.5), -6px 1px 6px 0px rgba(50, 50, 50, 0.5), 0px 6px 6px 0px rgba(50, 50, 50, 0.5)',
  }
}))

function Common(){
  const classes = useStyles();

  return(
      <Grid item xs={12} sm={12} md={10} className={classes.root}>
        <Box pb={2}>
          <Grid container item xs={12} justify={'center'}>
            <EnterTask/>
          </Grid>
          <Grid container item xs={12} justify={'center'}>
            <TodoList/>
          </Grid>
          <AdditionalParams/>
        </Box>
      </Grid>
  );
}

export default Common;