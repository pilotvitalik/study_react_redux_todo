import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import EnterTask from './EnterTask/EnterTask';

const useStyles = makeStyles((theme) => ({
  root:{
    background: '#fff',
  }
}))

function Common(){
  const classes = useStyles();

  let selectedValue = '';

  const handleChange = (e) => {
    selectedValue = 'a';
  }

  return(
    <Grid item xs={12} sm={12} md={8} className={classes.root}>
      <Grid container item xs={12} justify={'center'}>
        <EnterTask/>
      </Grid>
      <Grid item xs={12}>
        <List component="ul">
          <ListItem button={false}>
            <Radio
              checked={selectedValue === 'a'}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'A' }}
            />
            Задача № 1
            <Select
              native
              value={20}
              onChange={handleChange}>
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
            <Button variant='text' size='small'>х</Button>
          </ListItem>
          <ListItem button={false}>
            <Radio
              checked={selectedValue === 'b'}
              onChange={handleChange}
              value="a"
              name="radio-button-demo"
              inputProps={{ 'aria-label': 'B' }}
            />
            Задача № 2
            <Select
              native
              value={20}
              onChange={handleChange}>
              <option aria-label="None" value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
            <Button variant='text' size='small'>х</Button>
          </ListItem>
        </List>
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