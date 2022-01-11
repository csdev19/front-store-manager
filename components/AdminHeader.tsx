import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  Tooltip,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState, VoidFunctionComponent } from 'react';
import Link from 'next/link';

const AdminHeader: VoidFunctionComponent = () => {
  const [anchorElInventory, setAnchorElInventory] =
    useState<null | HTMLElement>(null);
  const [anchorElSales, setAnchorElSales] = useState<null | HTMLElement>(null);

  const openInventory = Boolean(anchorElInventory);
  const openSales = Boolean(anchorElSales);

  const handleClickInventory = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElInventory(event.currentTarget);
  };
  const handleCloseInventory = () => {
    setAnchorElInventory(null);
  };
  const handleClickSales = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElSales(event.currentTarget);
  };
  const handleCloseSales = () => {
    setAnchorElSales(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
            >
              STORE MANAGER
            </Typography>

            <Box sx={{ display: { xs: 'flex' } }}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleClickInventory}
              >
                Inventario
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElInventory}
                open={openInventory}
                onClose={handleCloseInventory}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <Link href="/inventory/products">
                  <MenuItem onClick={handleCloseInventory}>Productos</MenuItem>
                </Link>
                <Link href="/inventory/categories">
                  <MenuItem onClick={handleCloseInventory}>Categorias</MenuItem>
                </Link>
              </Menu>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={handleClickSales}
              >
                Ventas
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorElSales}
                open={openSales}
                onClose={handleCloseSales}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleCloseSales}>Ventas</MenuItem>
                <MenuItem onClick={handleCloseSales}>Ventas 2</MenuItem>
              </Menu>

              <Tooltip title="Open settings">
                <IconButton
                  onClick={() => {
                    console.log('holaaa');
                  }}
                  sx={{}}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default AdminHeader;
