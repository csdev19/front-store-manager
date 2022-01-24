import {
  Box,
  Button,
  CssBaseline,
  ThemeProvider,
  Typography,
} from '@mui/material';
import AdminLayout from 'components/AdminLayout';
import { IProduct } from 'core/interfaces/products.interface';
import React, { useState, VoidFunctionComponent } from 'react';
import theme from 'theme';
import ProductCreateForm from './ProductCreateForm';

const ProductCreate: VoidFunctionComponent = () => {
  const [product, setProduct] = useState<IProduct>({
    description: '',
    frontImage: '',
    images: [],
    isVisible: true,
    name: '',
    price: 0,
    stock: 0,
    categories: [],
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminLayout>
          <CssBaseline />

          <Box sx={{ display: 'flex', marginTop: 2, marginBottom: 2 }}>
            <Typography variant="h5" noWrap component="div">
              Crear producto
            </Typography>

            <Box sx={{ flexGrow: 1 }}></Box>
            <Button>Retroceder</Button>
            <Button variant="contained">Guardar</Button>
          </Box>

          <ProductCreateForm
            onChange={(data) => {
              console.log({ data });
            }}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            images={product.images}
            frontImage={product.frontImage}
            isVisible={product.isVisible}
            categories={product.categories}
          />
        </AdminLayout>
      </ThemeProvider>
    </>
  );
};

export default ProductCreate;
