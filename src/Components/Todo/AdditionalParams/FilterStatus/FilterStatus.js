import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	firstItem: {
		[theme.breakpoints.up('md')]: {
			marginTop: '12px',
		}
	}
}));

function FilterStatus(){
	const classes = useStyles();

	return(
		<Grid item xs={6}>
		  <Typography variant={'subtitle1'}><b>Фильтр по статусам</b></Typography>
		  <Box className={classes.firstItem}>
		  	<Typography variant={'subtitle1'}>Все</Typography>
		  </Box>
		  <Box>
		  	<Typography variant={'subtitle1'}>Активные</Typography>
		  </Box>
		  <Box>
		  	<Typography variant={'subtitle1'}>Выполненные</Typography>
		  </Box>
		</Grid>
	);
}

export default FilterStatus;