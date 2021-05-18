import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {Card, CardContent} from '@material-ui/core';
import Header from 'components/Header';
import 'css/Home/home.css';

const useStyles = makeStyles( (theme) => ({
    root: {
      maxWidth: 275
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(0, 0, 0,0),
      },
  }));

const Home = ({logout}) => {

    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Header logout={logout}></Header>
            <Container className={classes.heroContent}>
                <Typography component="div" >
                    {/* <Card className={classes.root}>
                        <CardContent>
                            CALENDAR
                        </CardContent>
                    </Card> */}
                </Typography>
            </Container>
        </React.Fragment>
    );
};
export default Home;

