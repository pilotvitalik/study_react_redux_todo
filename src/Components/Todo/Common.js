import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import EnterTask from './EnterTask/EnterTask';
import TodoList from './TodoList/TodoList';

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
    <Grid item xs={12} sm={12} md={8} className={classes.root}>
      <Grid container item xs={12} justify={'center'}>
        <EnterTask/>
      </Grid>
      <Grid container item xs={12} justify={'center'}>
        <TodoList/>
      </Grid>
      {/*Список задач*/}
        <Grid container item xs={12} direction={'row'} wrap={'wrap'}>
          <Grid item xs={12} sm={3}>
            <Typography variant={'subtitle1'}>Осталось задач:</Typography>
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
      {/*End список задач*/}
    </Grid>
  );
}

export default Common;