import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from '../TitleComponent/index.js';


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
        <Link color="primary" href="#" onClick={preventDefault}>
          View wins
        </Link>
        
        <Link color="secondary" href="#" onClick={preventDefault}>
          View losses
        </Link>
      </div>
    </React.Fragment>
  );
}