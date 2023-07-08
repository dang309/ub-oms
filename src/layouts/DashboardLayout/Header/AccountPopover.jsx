import { useRef, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Box, Button, Divider, MenuItem, Typography } from '@mui/material';
// material
import { alpha } from '@mui/material/styles';
import { useSnackbar } from 'notistack';

// components
import { MIconButton } from 'src/components/@material-extend';
import MenuPopover from 'src/components/MenuPopover';
import MyAvatar from 'src/components/MyAvatar';
// hooks
import useAuth from 'src/hooks/useAuth';
import useIsMountedRef from 'src/hooks/useIsMountedRef';
// routes
import { PATH_DASHBOARD } from 'src/routes/paths';
// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: "material-symbols:home-outline-rounded",
    linkTo: '/'
  },
  {
    label: 'Profile',
    icon: "material-symbols:switch-account-outline",
    // linkTo: PATH_DASHBOARD.user.profile
  },
  {
    label: 'Settings',
    icon: "material-symbols:settings-account-box-outline",
    // linkTo: PATH_DASHBOARD.user.account
  }
];

// ----------------------------------------------------------------------

const AccountPopover = () => {
  const anchorRef = useRef(null);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const isMountedRef = useIsMountedRef();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      if (isMountedRef.current) {
        handleClose();
      }
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout', { variant: 'error' });
    }
  };

  return (
    <>
      <MIconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <MyAvatar />
      </MIconButton>

      <MenuPopover open={open} onClose={handleClose} anchorEl={anchorRef.current} sx={{ width: 220 }}>
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {user?.displayName || "Username"}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {user?.email || "Email"}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem
            key={option.label}
            to={option.linkTo}
            component={RouterLink}
            onClick={handleClose}
            sx={{ typography: 'body2', py: 1, px: 2.5 }}
          >
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24
              }}
            />

            {option.label}
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth color="inherit" variant="outlined" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}

export default AccountPopover
