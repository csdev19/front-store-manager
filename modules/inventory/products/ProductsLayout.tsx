import {
  Button,
  Container,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from '@mui/material';
import React, { VoidFunctionComponent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { IProduct } from 'core/interfaces/products.interface';
import AddIcon from '@mui/icons-material/Add';
import AdminLayout from 'components/AdminLayout';
import theme from 'theme';
import Link from 'next/link';

function createData(
  id: number,
  name: string,
  description: string,
  frontImage: string,
  images: string[],
  price: number,
  stock: number,
  isVisible: boolean,
): IProduct {
  return {
    id,
    name,
    description,
    frontImage,
    images,
    price,
    stock,
    isVisible,
  };
}

const rows = [
  createData(1, 'Producto 1', 'Descripcion producto 1', '', [], 159, 10, true),
  createData(2, 'Producto 2', 'Descripcion producto 2', '', [], 237, 10, true),
  createData(3, 'Producto 3', 'Descripcion producto 3', '', [], 262, 10, true),
  createData(4, 'Producto 4', 'Descripcion producto 4', '', [], 305, 10, true),
  createData(5, 'Producto 5', 'Descripcion producto 5', '', [], 356, 10, true),
];

const ProductsLayout: VoidFunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminLayout>
          <h1>Products layout</h1>

          <div>
            <Link href="/inventory/products/create">
              <Button variant="contained" startIcon={<AddIcon />}>
                Crear
              </Button>
            </Link>
          </div>

          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Precio</TableCell>
                    <TableCell>Inventario</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.price}</TableCell>
                      <TableCell>{row.stock}</TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="delete">
                          <EditIcon />
                        </IconButton>

                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </AdminLayout>
      </ThemeProvider>
    </>
  );
};

export default ProductsLayout;
