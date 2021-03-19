import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import Box from '@material-ui/core/Box';
import NativeSelect from '@material-ui/core/NativeSelect';

import { useSelector } from 'react-redux';

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
	},
	closeBtn:{
		color: '#cc9a9a',
	}
}));

function TodoList(){
	const classes = useStyles();
	const list = useSelector(state => state.todo.listTasks);
	
	let selectedValue = '';

	const handleChange = (e) => {
	  selectedValue = 'a';
	}

	const listTodo = list.map((item) => 
		<ListItem button={false} key={item.id}>
			<Radio
			  checked={selectedValue === 'a'}
			  onChange={handleChange}
			  value="a"
			  name="radio-button-demo"
			  inputProps={{ 'aria-label': 'A' }}
			/>
			<Typography paragraph={true} className={classes.text}>
				{item.title}
			</Typography>
			<NativeSelect
			  value={item.color}
			  onChange={handleChange}
			  name="color"
			>
			  <option value={'Green'}>Green</option>
			  <option value={'Blue'}>Blue</option>
			  <option value={'Orange'}>Orange</option>
			  <option value={'Purple'}>Purple</option>
			  <option value={'Red'}>Red</option>
			</NativeSelect>
			<Box ml={1}>
				<Button variant='text' className={classes.btn}><Clear/></Button>
			</Box>
		</ListItem>
	);

	return(
		<List component="ul" className={classes.root}>
		  {listTodo}
		</List>
	);
}

export default TodoList;