import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function FilterStatus(){
	return(
		<Grid item xs={6}>
		  <Typography variant={'subtitle1'}><b>Фильтр по статусам</b></Typography>
		</Grid>
	);
}

export default FilterStatus;