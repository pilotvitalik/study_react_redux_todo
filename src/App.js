import Grid from '@material-ui/core/Grid';

import Header from './Components/Header/Header';
import Title from './Components/Title/Title';
import Common from './Components/Todo/Common';

import style from './app.module.css';

function App() {
  return (
    <div className={style.App}>
      <Grid container>
        <Header/>
        <Title/>
        <Grid container item xs={12} direction={'row'} wrap={'nowrap'}>
          <Grid item xs={false} md={1}>
          </Grid>
          <Common/>
          <Grid item xs={false} md={1}>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
