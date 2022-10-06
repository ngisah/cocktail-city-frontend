import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({

    title: {
        paddingRight: '100px',
    },
  }));
  
  export default function NavBar() {
    const classes = useStyles();
    return (
      <div>
        <AppBar position="static" color="inherit">
          <container>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
              <Button color="inherit" component={ Link } to="/">Home</Button>
              </Typography>
              <Button color="inherit">Cocktail List</Button>
              <Button color="inherit">Add a Cocktail</Button>
            </Toolbar>
            </container>
          
        </AppBar>
      </div>
    );
    }