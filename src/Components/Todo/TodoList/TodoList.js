import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root:{
		width: '95%',
	},
	text:{
		width: '82%',
		marginBottom: 0,
	},
	btn:{
		minWidth: '25px',
		width: '25px',
	}
}));

function TodoList(){
	const classes = useStyles();

	let selectedValue = '';

	const handleChange = (e) => {
	  selectedValue = 'a';
	}

	return(
		<List component="ul" className={classes.root}>
		  <ListItem button={false}>
		  	<Radio
		  	  checked={selectedValue === 'a'}
		  	  onChange={handleChange}
		  	  value="a"
		  	  name="radio-button-demo"
		  	  inputProps={{ 'aria-label': 'A' }}
		  	/>
		  	<Typography paragraph={true} className={classes.text}>
		  		Задача № 1
		  	</Typography>
		  	<Select
		  	  native
		  	  value={20}
		  	  onChange={handleChange}>
		  	  <option aria-label="None" value="" />
		  	  <option value={10}>Ten</option>
		  	  <option value={20}>Twenty</option>
		  	  <option value={30}>Thirty</option>
		  	</Select>
		  	<Button variant='text' className={classes.btn}>х</Button>
		  </ListItem>
		</List>
	);
}

export default TodoList;