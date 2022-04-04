import * as React from 'react';
import Box from '@mui/material/Box';

import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

export default function StoriesCatagoriesTabs() {
  
  const {route,subRoute} = useParams();

  return (  
      <div>
          <NavLink style={{marginLeft:"5%"}} to='horror'>Horror</NavLink>
          <NavLink style={{marginLeft:"5%"}} to='love-story'>Love stories</NavLink>
          <NavLink style={{marginLeft:"5%"}} to='animated'>Animated</NavLink>
          <div style={{marginLeft:"7%"}}>
          <Outlet/>
          </div>
      </div>
  );
}
