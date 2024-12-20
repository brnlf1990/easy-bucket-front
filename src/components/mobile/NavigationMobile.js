import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';

const NavigationMobile = ({handleLogOut}) => {
  const navigate = useNavigate();
  const location = useLocation();

  function signOut() {
    localStorage.removeItem('token');
    handleLogOut();
    navigate('/signin');
  }

  const isActive = (path) => location.pathname === path;

  return (
    <Menu>
      <MenuButton as={Button} variant="outline" size="sm" color={'white'}>
        Open
      </MenuButton>
      <MenuList>
        <MenuItem fontSize={'14px'}
          className={`navigation__dashboard ${
            isActive('/main') ? 'navigation__dashboard--featured' : ''
          }`}
          onClick={() => navigate('/main')}
        >
          Home
        </MenuItem>
        <MenuItem fontSize={'14px'}
          className={`navigation__tracking_list ${
            isActive('/activities')
              ? 'navigation__activities_list--featured'
              : ''
          }`}
          onClick={() => navigate('/activities')}
        >
          Activities
        </MenuItem>
        <MenuItem fontSize={'14px'} onClick={signOut}>
          Sair
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default NavigationMobile;