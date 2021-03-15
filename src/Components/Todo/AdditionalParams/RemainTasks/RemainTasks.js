import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	remainTask:{
	  marginBottom: '8px',
	  [theme.breakpoints.up('md')]: {
	    order: 2,
	    marginBottom: '0',
	  }
	},
	countTasks:{
		[theme.breakpoints.up('md')]: {
		  marginTop: '20px',
		}
	}
}));

function RemainTasks(){
	const classes = useStyles();

	return(
		<Grid item xs={12} md={3} className={classes.remainTask}>
		  <Typography variant={'subtitle1'} align={'center'}><b>Осталось задач</b></Typography>
	   	  <Typography variant={'subtitle1'} align={'center'} className={classes.countTasks}>1 задача осталась</Typography>
		</Grid>
	);
}

export default RemainTasks;