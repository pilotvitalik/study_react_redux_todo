import { Fragment, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
	green:{
		width: '50px',
		height: '10px',
	},
}))

const GreenCheckbox = withStyles({
  root: {
  	root: '#767676',
    '&$checked': {
      color: 'red',
    },
  },
  checked: {},
})((props) => <Fragment><Box {...props}></Box><Checkbox {...props} /></Fragment>);

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
		  <FormGroup row>
		    <FormControlLabel control={<GreenCheckbox checked={state.checkedGreen} onChange={handleChange} name="checkedGreen" className={classes.green}/>} label="Green"/>
		    <FormControlLabel control={<GreenCheckbox checked={state.checkedBlue} onChange={handleChange} name="checkedBlue" />} label="Blue"/>
		    <FormControlLabel control={<GreenCheckbox checked={state.checkedOrange} onChange={handleChange} name="checkedOrange" />} label="Orange"/>
		    <FormControlLabel control={<GreenCheckbox checked={state.checkedPurple} onChange={handleChange} name="checkedPurple" />} label="Purple"/>
		    <FormControlLabel control={<GreenCheckbox checked={state.checkedRed} onChange={handleChange} name="checkedRed" />} label="Red"/>
		  </FormGroup>
		</Grid>
	);
}

export default FilterColor;