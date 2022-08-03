import React from 'react'
import { styles } from './styles'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function OtpPopup(props) {

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>OTP Verification</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter OTP we've sent you on +91-XXXXXXXXXX
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OTP"
            type="number"
            fullWidth
            variant="standard"
          />

        <DialogContentText sx={{mt:"25px"}}>
        Please enter OTP we've sent you on xyx@abc.com
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="OTP"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Verify</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
