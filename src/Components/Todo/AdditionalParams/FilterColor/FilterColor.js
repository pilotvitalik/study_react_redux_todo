import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

function FilterColor(){
	const [value, setValue] = useState('female');

	const handleChange = (event) => {
	  setValue(event.target.value);
	};

	return(
		<Grid item xs={6}>
		  <Typography variant={'subtitle1'} align={'center'}><b>Фильтр по цветам</b></Typography>
		  <FormControl component="fieldset">
		    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
		      <FormControlLabel value="female" control={<Radio />} label="Female" />
		      <FormControlLabel value="male" control={<Radio />} label="Male" />
		      <FormControlLabel value="other" control={<Radio />} label="Other" />
		      <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
		    </RadioGroup>
		  </FormControl>
		</Grid>
	);
}

export default FilterColor;