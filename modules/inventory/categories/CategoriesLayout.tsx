import {
  Container,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
  ThemeProvider,
} from '@mui/material';
import { ICategory } from 'core/interfaces/categories.interface';
import React, { VoidFunctionComponent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import AdminLayout from 'components/AdminLayout';
import theme from 'theme';

function createData(id: number, name: string, description: string): ICategory {
  return {
    id,
    name,
    description,
  };
}

const rows = [
  createData(1, 'Categoria 1', 'Descripcion categoria 1'),
  createData(2, 'Categoria 2', 'Descripcion categoria 2'),
  createData(3, 'Categoria 3', 'Descripcion categoria 3'),
  createData(4, 'Categoria 4', 'Descripcion categoria 4'),
  createData(5, 'Categoria 5', 'Descripcion categoria 5'),
];

const CategoriesLayout: VoidFunctionComponent = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AdminLayout />
        <Container maxWidth="lg">
          <h1> Categories layout</h1>

          <div>
            <Button variant="contained" startIcon={<AddIcon />}>
              Crear
            </Button>
          </div>

          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell align="center">Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell>{row.description}</TableCell>
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
        </Container>
      </ThemeProvider>
    </>
  );
};

export default CategoriesLayout;
