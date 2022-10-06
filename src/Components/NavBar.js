import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@mui/material/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const useStyles = makeStyles(() => ({

    title: {
        paddingRight: '100px',
    },
  }));
  
  export default function NavBar() {
    const classes = useStyles();
    return (
      <div>
        <AppBar position="static" color="inherit">
          <Container>
            <Toolbar>
              <Typography variant="h6" className={classes.title}>
              <Button color="inherit" component={ Link } to="/">Home</Button>
              </Typography>
              <Button color="inherit" component={ Link } to="/cocktails">Cocktail List</Button>
              <Button color="inherit">Add a Cocktail</Button>
            </Toolbar>
            </Container>
          
        </AppBar>
      </div>
    );
    }