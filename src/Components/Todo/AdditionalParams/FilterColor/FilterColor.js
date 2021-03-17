import { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
	root:{
		paddingRight: '4px',
	},
	common:{
		width: '20px',
		height: '12px',
		borderRadius: '4px',
	},
	green:{
		background: 'green',
	},
	blue:{
		background: 'blue',
	},
	orange:{
		background: 'orange',
	},
	purple:{
		background: 'purple',
	},
	red:{
		background: 'red',
	},
	iconGreen:{
		'& input:checked + svg':{
			color: 'green',
		}
	},
	iconBlue:{
		'& input:checked + svg':{
			color: 'blue',
		}
	},
	iconOrange:{
		'& input:checked + svg':{
			color: 'orange',
		}
	},
	iconPurple:{
		'& input:checked + svg':{
			color: 'purple',
		}
	},
	iconRed:{
		'& input:checked + svg':{
			color: 'red',
		}
	}
}))

function FilterColor(){
	const classes = useStyles();

	const [state, setState] = useState({
	    checkedGreen: false,
	    checkedBlue: false,
	    checkedOrange: false,
	    checkedPurple: false,
	    checkedRed: false,
	  });

	const handleChange = (event) => {
	    setState({ ...state, [event.target.name]: event.target.checked });
	  };

	return(
		<Grid item xs={6}>
		  <Typography variant={'subtitle1'} align={'center'}><b>Фильтр по цветам</b></Typography>
		  <FormGroup>
		    <FormControlLabel control={
		    	<Fragment>
		    		<Checkbox
		    			checked={state.checkedGreen}
		    			onChange={handleChange}
		    			className={[classes.root, classes.iconGreen].join(' ')}
		    			name="checkedGreen"
		    		/>
		    		<Box
		    			className={[classes.common, classes.green].join(' ')}
		    			mr={0.5}
		    		></Box>
		    		</Fragment>
		    	}
		    	label="Green"
		    	/>
		    <FormControlLabel control={
		    	<Fragment>
		    		<Checkbox
		    			checked={state.checkedBlue}
		    			onChange={handleChange}
		    			className={[classes.root, classes.iconBlue].join(' ')}
		    			name="checkedBlue"
		    		/>
		    		<Box
		    			className={[classes.common, classes.blue].join(' ')}
		    			mr={0.5}
		    		></Box>
		    		</Fragment>
		    	}
		    	label="Blue"/>
		    <FormControlLabel control={
		    	<Fragment>
		    		<Checkbox
		    			checked={state.checkedOrange}
		    			onChange={handleChange}
		    			className={[classes.root, classes.iconOrange].join(' ')}
		    			name="checkedOrange"
		    		/>
		    		<Box
		    			className={[classes.common, classes.orange].join(' ')}
		    			mr={0.5}
		    		></Box>
		    		</Fragment>
		    	}
		    	label="Orange"/>
		    <FormControlLabel control={
		    	<Fragment>
		    		<Checkbox
		    			checked={state.checkedPurple}
		    			onChange={handleChange}
		    			className={[classes.root, classes.iconPurple].join(' ')}
		    			name="checkedPurple"
		    		/>
		    		<Box
		    			className={[classes.common, classes.purple].join(' ')}
		    			mr={0.5}
		    		></Box>
		    		</Fragment>
		    	}
		    	label="Purple"/>
		    <FormControlLabel control={
		    	<Fragment>
		    		<Checkbox
		    			checked={state.checkedRed}
		    			onChange={handleChange}
		    			className={[classes.root, classes.iconRed].join(' ')}
		    			name="checkedRed"
		    		/>
		    		<Box
		    			className={[classes.common, classes.red].join(' ')}
		    			mr={0.5}
		    		></Box>
		    		</Fragment>
		    	}
		    	label="Red"/>
		  </FormGroup>
		</Grid>
	);
}

export default FilterColor;