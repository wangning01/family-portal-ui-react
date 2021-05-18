import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Image from 'images/home.jpg';


const useStyles = makeStyles((theme) => ({
  
  root: {
     paddingTop: 50
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  background: {
      backgroundImage: `url(${Image})`,
      height: 515
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  colorGreen: {
      backgroundColor: 'green'
  },
  colorYellow: {
    backgroundColor: 'yellow'
  },
  cardSize: {
    //width: 200,
    height: 180
  }
}));

const tiers = [
  {
    title: 'Calendar',
    color: 'green'
  },
  {
    title: 'Music',
    color: 'yellow'
  }
];

export default function Home() {
  const classes = useStyles();
  

  return (
    <React.Fragment>
      <CssBaseline />
      <Header></Header>
      <Container maxWidth="lg" component="main" className={`${classes.background} ${classes.heroContent}`}>
        <Grid container spacing={5}  alignItems="flex-end" justify="center" className={classes.root}>
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} md={2}>
              <Card >
                <CardContent className={`${tier.color === 'green' ? classes.colorGreen : classes.colorYellow}
                       ${classes.cardSize}`}>
                    <Typography component="div"  variant='h4' style={{paddingTop: '50px',textAlign: 'center'}}>
                      {tier.title}
                    </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}