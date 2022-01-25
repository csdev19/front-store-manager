import {
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  ListItemText,
  SelectChangeEvent,
} from '@mui/material';
import { IProduct } from 'core/interfaces/products.interface';
import React, { FunctionComponent } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

interface ProductCreateFormProps extends Partial<IProduct> {
  onChange: (data: IProduct) => void;
}

const ProductCreateForm: FunctionComponent<ProductCreateFormProps> = ({
  onChange,
  description,
  name,
  frontImage,
  images,
  isVisible,
  price,
  stock,
  categories,
}) => {
  // const [personName, setPersonName] = React.useState<string[]>([]);

  const categoriesOptions = [
    { value: 1, label: 'Category 1' },
    { value: 2, label: 'Category 2' },
    { value: 3, label: 'Category 3' },
    { value: 4, label: 'Category 4' },
    { value: 5, label: 'Category 5' },
    { value: 6, label: 'Category 6' },
    { value: 7, label: 'Category 7' },
    { value: 8, label: 'Category 8' },
    { value: 9, label: 'Category 9' },
    { value: 10, label: 'Category 10' },
  ];

  const handleChange = (event: SelectChangeEvent<typeof categories>) => {
    const {
      target: { value },
    } = event;
    // setPersonName(
    //   // On autofill we get a stringified value.
    //   typeof value === 'string' ? value.split(',') : value,
    // );
  };

  return (
    <>
      <Box component="form">
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Nombre"
          name="name"
          autoFocus
          value={name}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Descripcion"
          name="description"
          value={description}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="price"
          label="Precio"
          name="price"
          value={price}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          id="stock"
          label="Cantidad en stock"
          name="stock"
          value={stock}
        />
        <FormControlLabel
          control={<Checkbox value={isVisible} color="primary" />}
          label="Remember me"
          labelPlacement="start"
        />

        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="demo-multiple-checkbox-label">Categorias</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={categories}
            onChange={handleChange}
            input={<OutlinedInput label="Categorias" />}
            renderValue={(selected) => selected.join(', ')}
            MenuProps={MenuProps}
          >
            {categoriesOptions.map((category, idx) => (
              <MenuItem key={idx} value={category.value}>
                <Checkbox
                  checked={(categories || []).indexOf(category.value) > -1}
                />
                <ListItemText primary={category.label} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default ProductCreateForm;
