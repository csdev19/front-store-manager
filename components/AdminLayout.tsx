import React, { FunctionComponent } from 'react';
import AdminHeader from './AdminHeader';
import { Container } from '@mui/material';

type AdminLayoutProps = {
  children: React.ReactNode;
};

const AdminLayout: FunctionComponent<AdminLayoutProps> = ({ children }) => {
  return (
    <>
      <AdminHeader />
      <Container maxWidth="lg">{children}</Container>
    </>
  );
};

export default AdminLayout;
