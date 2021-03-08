import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	text:{
		width: '90%',
	}
}));

function EnterTask(){
	const classes = useStyles();

	return(
		<TextField
          id="standard-basic"
          label="Что необходимо сделать?"
          className={classes.text} />
	);
}

export default EnterTask;