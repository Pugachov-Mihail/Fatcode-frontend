import React, { useState } from 'react';
import { NavBarText } from '../../data/TextsLists';
import HeaderLinks from '../../components/header/componentsHeader/HeaderLinks';
import { InputBase, Container, IconButton, Typography, Button } from '@mui/material';
import Image from 'next/image';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AppBar from '@mui/material/AppBar';
import { Toolbar, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LogotypeHeader } from '../../components/header/componentsHeader/LogotypeHeader';
import MobiileNavBar from './MobileNavBar';


const NavBar: React.FC = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const click = (event) => {
    console.log(event.currentTarget);
    setAnchorEl(event.currentTarget);
  }

  const closeMenu = () => {
    console.log('close');
    setAnchorEl(null);
  }

  const openMenu = Boolean(anchorEl);

  // const [openMobileMenu, setOpenMobileMenu] = useState(false);

  return (
    <>
      <Container maxWidth="xl" sx={{
        color: '#1C1D1E', marginBottom: 1
      }}>
        <Box
          sx={{
            backgroundColor: '#E5E5E5'
          }}>
          <Toolbar>
            <Box component='div'
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                width: '100%',
                color: '#1C1D1E',
              }}>
              {/* логотип */}
              <Box>
                <LogotypeHeader />
              </Box>

              {/* ссылки */}
              {/* <MobiileNavBar links={NavBarText}> */}
              <Box>
                <HeaderLinks links={NavBarText} />
              </Box>
              {/* </MobiileNavBar> */}

              {/* поле для поиска */}
              <Box>
                <InputBase placeholder='искать тут'
                  endAdornment={
                    <InputAdornment position='end'>
                      <SearchIcon />
                    </InputAdornment>
                  }
                  sx={{
                    paddingX: 2,
                    borderBottom: '1px solid #1C1D1E',
                    // display: {sx: 'none', sm: 'flex'},
                  }} />
              </Box>

              {/* кнопка для входа */}
              <Box>
                <IconButton>
                  <PersonOutlineRoundedIcon sx={{ color: '#69CB2D' }} />
                </IconButton>
                <Button variant='text' disableElevation
                  sx={{
                    textTransform: 'capitalize',
                    // fontWeight: 500,
                    // fontSize: 20, 
                    color: '#1C1D1E',
                  }}>
                  Войти
                </Button>

                {/* кнопка ... */}
                <IconButton
                  aria-controls='menu'
                  aria-haspopup='true'
                  aria-expanded={openMenu ? 'true' : undefined}
                  onClick={click}
                >
                  <MoreVertIcon />
                  {/* выпадающие элементы при нажатии на ... */}
                  <Menu id='menu'
                    anchorEl={anchorEl}
                  // open={openMenu} 
                  // onClose={closeMenu}
                  >
                    <MenuItem onClick={closeMenu}>Главная</MenuItem>
                    <MenuItem onClick={closeMenu}>Курсы</MenuItem>
                    <MenuItem onClick={closeMenu}>Вопрос-ответ</MenuItem>
                    <MenuItem onClick={closeMenu}>База знаний</MenuItem>
                  </Menu>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </Container>
      {children}
    </>
  );
};

const MemoNavBar = React.memo(NavBar);
export default MemoNavBar;