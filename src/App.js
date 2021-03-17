import logo from './logo.svg';
import './App.css';
import data from './data'
import { useState } from 'react';
import List from './List';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  btn:{
    margin: theme.spacing(1) ,
    
  }
}));


function App() {
  const classes = useStyles();

  const [People, setPeople] = useState(data)
  return (
    <div className="App">
       <div className="list">
        
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <List className={classes.paper} People={People} />
        </Grid>
        </Grid>    

       <div className={classes.btn}>
          <Button className={classes.btn} variant="contained" color="primary" onClick={()=>setPeople(data)}>
            Refresh 
         </Button>
          <Button className={classes.btn} variant="contained" color="secondary" onClick={() => setPeople([])}>
            Clear All
          </Button>
       </div>
        
       </div>
    </div>
  );
}

export default App;
