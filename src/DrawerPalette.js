import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function DrawerPalette({ open, anchorEl, handleClose }) {
const navigate = useNavigate();
const handleLogout = () => {
    navigate('/');
}
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Typography sx={{ p: 2 }}>Update Password</Typography>
      <Typography sx={{ p: 2 }} href="/login" onClick={handleLogout}>Logout</Typography>
    </Popover>
  );
}
