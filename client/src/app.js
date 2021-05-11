import React from "react";
import { AppBar, Typography, Container, Grid, Grow, makeStyles } from "@material-ui/core";
import memos from "./images/logo.png";
import Posts from "./components/posts/posts";
import Form from "./components/forms/form";
import useStyles from './styles';

const App = () => {
    const classes=useStyles();

  return (
    <Container maxWidth="lg">
      <AppBar className= {classes.appBar} position="static" color="inherit">
      <img className= {classes.img}src={memos} alt="Logo" height="120"></img>

        <Typography className= {classes.heading} variant="h2" align="center">
          MemOS
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
