import todec from '2dec';
import { Typography } from '@mui/joy';
import React from 'react';

import DataContainer from '../DataContainer';

export default function DistanceValue({ distance }: { distance: number }) {
  return (
    <DataContainer>
      <Typography level="title-md">Distance</Typography>
      <Typography>{todec(distance)} studs</Typography>
    </DataContainer>
  );
}