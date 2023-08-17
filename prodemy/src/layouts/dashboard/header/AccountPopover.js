import { useState, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
// @mui
import { alpha } from '@mui/material/styles';
import { Box, Divider, Typography, Stack, MenuItem, Avatar, IconButton, Popover, Accordion, AccordionSummary, AccordionDetails, } from '@mui/material';
import { ExpandMore, SubdirectoryArrowRight } from '@mui/icons-material';
import CryptoJS from 'crypto-js';
// mocks_
import account from '../../../_mock/account';
import useUserData from '../../../_mock/UserData';

export default function AccountPopover(val, index) {
  const navigate = useNavigate();
  const { name, email } = useUserData();
  const [open, setOpen] = useState(null);
  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  // console.log(name)
  const handleClose = () => {
    setOpen(null);
  }
  const handleLogout = () => {
    // setOpen(null);
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('token');
    navigate('/login');
  };

  const handleDash = () => {
    navigate('/dashboard/app');
  }

  const handleViewProfile = () => {
    navigate('/dashboard/view_profile');
  }

  const [click, setClick] = useState(null);

  const toggle = (index) => {
    if (click === index) {
      setClick(null);
    } else {
      setClick(index);
    }
  };

  const encryptValue = (value) => {
    const encryptedValue = CryptoJS.AES.encrypt(value.toString(), 'secret_key').toString();
    return encodeURIComponent(encryptedValue);
  };

  const decryptValue = (encryptedValue) => {
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedValue, 'secret_key');
    const decryptedValue = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return parseInt(decryptedValue, 10);
  };

  const sx = {
    menuHover: {
      m: 1,
      "&:hover": {
        borderRadius: '0px',
        borderRight: '7px solid #9900d1ab'
      }
    },
    subMenuHover: {
      "&:hover": {
        borderRadius: '0px',
        borderRight: '7px solid #9900d1ab'
      }
    }
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        <Avatar src={account.photoURL} alt="photoURL" />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >


        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {email}
          </Typography>
        </Box>


        <Divider sx={{ borderStyle: 'dashed' }} />
        {/* 
        <MenuItem onClick={handleViewProfile} sx={{ m: 1 }}>
          Profile
        </MenuItem> */}

        <Accordion sx={{ margin: "0 !important" }}>
          <AccordionSummary
            expandIcon={click === index ? <ExpandMore sx={{ color: '#fff', height: '48px' }} /> : <ExpandMore />}
          >
            <MenuItem sx={{
              cursor: 'text',
              p: 0,
            }}>
              My Profile
            </MenuItem>
          </AccordionSummary>

          <MenuItem sx={sx.subMenuHover}>
            <AccordionDetails sx={{ p: '5px 20px' }}
              onClick={() => { navigate(`/dashboard/view_profile?tab=${encryptValue(0)}`); handleClose(); }}>
              <Typography variant="caption"> My Progress</Typography>
            </AccordionDetails>
          </MenuItem>

          <MenuItem sx={sx.subMenuHover}>
            <AccordionDetails sx={{ p: '5px 20px' }} onClick={() => { navigate(`/dashboard/view_profile?tab=${encryptValue(1)}`); handleClose(); }}>
              <Typography variant="caption"> Saved Courses</Typography>
            </AccordionDetails>
          </MenuItem>

          <MenuItem sx={sx.subMenuHover}>
            <AccordionDetails sx={{ p: '5px 20px' }} onClick={() => { navigate(`/dashboard/view_profile?tab=${encryptValue(2)}`); handleClose(); }}>
              <Typography variant="caption"> Certificates</Typography>
            </AccordionDetails>
          </MenuItem>

        </Accordion>
        {/* <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack> */}

        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem onClick={handleDash} sx={sx.menuHover}>
          Dashboard
        </MenuItem>

        <MenuItem onClick={handleLogout} sx={sx.menuHover}>
          Logout
        </MenuItem>
      </Popover>
      {/* <Modal style={{ width: "800" }} centered open={modalOpen} onCancel={() => setModalOpen(false)} footer={null}>
        <UserProfile style={{ width: "800" }} />
      </Modal> */}
    </>
  );
}
