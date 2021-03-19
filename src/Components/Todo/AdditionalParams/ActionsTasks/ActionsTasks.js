import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root:{
		marginBottom: '8px',
		[theme.breakpoints.up('md')]:{
			order: 1,
			marginBottom: 0,
		}
	},
	firstBtn:{
		marginTop: '8px',
	},
	btns:{
		color: '#fff',
		background: '#1976d2',
		borderRadius: '5px',
	}
}))

function ActionsTasks(){
	const classes = useStyles();

	return(
		<Grid container item xs={12} md={3} direction={'column'} justify={'flex-start'} align={'center'} className={classes.root}>
		  <Typography variant={'subtitle1'} align={'center'}><b>Действия</b></Typography>
		  <Box mb={1} className={classes.firstBtn}>
		  	<Button variant="contained" className={classes.btns}>
		  	  Отметить все
		  	</Button>
		  </Box>
		  <Box>
		  	<Button variant="contained" className={classes.btns}>
		  	  Удалить выполненные
		  	</Button>
		  </Box>
		</Grid>
	);
}

export default ActionsTasks;