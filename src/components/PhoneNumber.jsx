import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import { Box, Typography } from '@mui/material';

const PhoneNumber = ({ number }) => {
  return (
    <Box display="flex" alignItems="center" gap={1}>
      <CallIcon color="primary" />
      <Typography variant="body1">{number}</Typography>
    </Box>
  );
};

export default PhoneNumber;
