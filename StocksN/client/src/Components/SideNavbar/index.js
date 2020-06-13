//Stuff that makes the side navbar

import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import Link from '@material-ui/core/Link';

export const mainListItems = (
  <div>
    <Link href="/userdashboard" variant="body2">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary=" User Dashboard" />
      </ListItem>
    </Link>
    <Link href="/userdashboard/favorites" variant="body2">
      <ListItem button>
        <ListItemIcon>
          <FavoriteIcon />
        </ListItemIcon>
        <ListItemText primary="Favorites" />
      </ListItem>
    </Link>

  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Charts and Data</ListSubheader>

    <Link href="/userdashboard/crypto" variant="body2">
      <ListItem button>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Crypto" />
      </ListItem>
    </Link>

    <Link href="/userdashboard/stocks" variant="body2">
    <ListItem button>
      <ListItemIcon>
        <ShowChartIcon />
      </ListItemIcon>
      <ListItemText primary="Stocks" />
    </ListItem>
    </Link>
  </div>
);