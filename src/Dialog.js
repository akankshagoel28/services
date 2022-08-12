import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ServiceDetails from './serviceDetails';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ServiceDetails handleClick={handleClickOpen} />
      {/* <Button variant="outlined" className="Request" onClick={handleClickOpen}>
       Request
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers
        >
          <div>
            <form>
              <div className="leftAlign"><h1>GET A QUOTATION</h1></div>
              <input type="text" id="name" name="name" placeholder="Full Name"></input>
              <input type="email" id="email" name-="email" placeholder="Email"></input>
              <input type="tel" id="phone1" name="phoneno1" placeholder="Phone No."></input>
              <p>Project Description</p>
              <textarea rows="6" column="50" placeholder="Type here..."></textarea>
              <div className="buttons">
                <button style={{ background: "#F2F3FA", color: "#3F4AAF" }}>Cancel</button>
                <button style={{ background: "#3F4AAF", color: "#FFFFFF" }}>Request</button>
              </div>
            </form>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
