import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../UserDashboard/TitleComponent/index';
import Grid from '@material-ui/core/Grid';



function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Your Portfolio</Title>
      
      <Typography color="textPrimary" className={classes.depositContext}>
        This is where you see if you gained or lost money!
      </Typography>
      <div>
        <Grid container spacing={4}>
          
          <Grid item lg={6}>
            <Link color="primary" href="#" onClick={preventDefault}>
            View wins
            </Link>
          </Grid>

          <Grid item lg={6}>
            <Link color="secondary" href="#" onClick={preventDefault}>
              View losses
            </Link>
          </Grid>

        </Grid>
      </div>
    </React.Fragment>
  );
}