import React, { useState, useRef } from 'react';
import {
  Avatar,
  Popper,
  Box,
  Paper,
  MenuList,
  MenuItem,
  Typography,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { selectAuthUser } from '../../store/selectors';
import { authLogoutAction } from '../../store/action-creators';
import { useRootDispatch, useRootSelector } from '../../store/hooks';

const NavbarAuthMenu: React.FC = () => {
  // const navigate = useNavigate();
  const user = useRootSelector(selectAuthUser);
  const dispatch = useRootDispatch();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const popperAnchorRef = useRef<HTMLDivElement>(null);

  const logout = () => {
    dispatch(authLogoutAction);
  };

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const userInitials = user && user.name && user.surname
    ? user.name[0] + user.surname[0]
    : null;

  return (
    <Box
      ref={popperAnchorRef}
      sx={{ display: 'inline-flex', alignItems: 'center', height: 64 }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={handleMenuOpen}
      >
        <Box mr={2}>
          <FavoriteIcon sx={{ ':hover': { color: '#e36868' } }} />
        </Box>
        <Typography sx={{ mr: 2, userSelect: 'none', color: '#b8aba3' }}>{user?.email}</Typography>
        {(userInitials || user?.img) && <Avatar src={user?.img}>{userInitials}</Avatar>}

      </Box>
      <Popper
        placement="bottom-end"
        anchorEl={popperAnchorRef.current}
        open={menuOpen}
        sx={{ zIndex: 'tooltip' }}
      >
        <Paper elevation={3}>
          <MenuList>
            <MenuItem onClick={logout}>
              Atsijungti
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  );
};

export default NavbarAuthMenu;
