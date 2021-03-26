import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import Box from '@material-ui/core/Box';
import NativeSelect from '@material-ui/core/NativeSelect';

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
	},
	red:{
		color: 'red'
	},
	orange:{
		color: 'orange'
	},
	green:{
		color: 'green'
	},
	blue:{
		color: 'blue'
	},
	purple:{
		color: 'purple'
	}
}));

function TodoList(){
	const classes = useStyles();
	const list = useSelector(state => state.todo.listTasks);
	const dispatch = useDispatch();
	const [activeTask, setActiveTask] = useState(false);
	const [activeColor, setActiveColor] = useState('');
	const [activeStyle, setActiveStyle] = useState('');
	const [activeSelect, setactiveSelect] = useState('');

	const changeColor = (e) => {
		const name = e.currentTarget.name;
		const val = e.currentTarget.value;
		setactiveSelect(e.currentTarget.name);
	  	setActiveColor(e.currentTarget.value);
	  	setActiveStyle(e.currentTarget.value.toLowerCase());
	  	dispatch({type: 'todo/updateColorLocal', payload: {name: name, val: val}});
	}

	const changeSelectedTask = (e) => {
		setActiveTask(e.currentTarget.name);
	}

	const defineActiveSelect = (item) => {
		if (activeSelect === "color_" + item.name){
			return activeColor;
		} else {
		  	return item.color_item;
		 }
	}

	const defineActiveSelectColor = (item) => {
		if (activeSelect === "color_" + item.name){
		  	return classes[activeStyle]
		} else {
		  	return classes[item.color]
		}
	}
	const listTodo = list.map((item) => 
		<ListItem button={false} key={item.id}>
			<Radio
			  checked={activeTask === item.name}
			  onChange={changeSelectedTask}
			  name={item.name}
			/>
			<Typography paragraph={true} className={classes.text}>
				{item.title}
			</Typography>
			<NativeSelect
			  value={defineActiveSelect(item)}
			  onChange={changeColor}
			  name={"color_" + item.name} 
			  className={defineActiveSelectColor(item)}
			>
			  <option value={'Green'} className={classes.green}>Green</option>
			  <option value={'Blue'} className={classes.blue}>Blue</option>
			  <option value={'Orange'} className={classes.orange}>Orange</option>
			  <option value={'Purple'} className={classes.purple}>Purple</option>
			  <option value={'Red'} className={classes.red}>Red</option>
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