import { ThemeProvider } from '@emotion/react';
import { CssBaseline, Box, Typography, Button } from '@mui/material';
import AdminLayout from 'components/AdminLayout';
import React, { useEffect, useState, VoidFunctionComponent } from 'react';
import theme from 'theme';
import ProductCreateForm from './ProductCreateForm';
import { useRouter } from 'next/router';
import { IProduct } from 'core/interfaces/products.interface';

const ProductUpdate: VoidFunctionComponent = () => {
  const { query } = useRouter();

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

  useEffect(() => {
    if (!query) return;
    console.log('query', query);
  }, [query]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminLayout>
          <CssBaseline />

          <Box sx={{ display: 'flex', marginTop: 2, marginBottom: 2 }}>
            <Typography variant="h5" noWrap component="div">
              Actualizar producto
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

export default ProductUpdate;
