import { ThemeProvider } from '@emotion/react';
import { Box, TextField } from '@mui/material';
import AdminLayout from 'components/AdminLayout';
import React, { VoidFunctionComponent } from 'react';
import theme from 'theme';

const CategoryCreate: VoidFunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminLayout>
          <h1>Product create</h1>

          <Box component="form">
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Nombre"
              name="name"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="description"
              label="Descripcion"
              name="description"
            />
          </Box>
        </AdminLayout>
      </ThemeProvider>
    </>
  );
};

export default CategoryCreate;
