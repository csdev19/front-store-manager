import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import React, { FunctionComponent } from 'react';
import theme from 'theme';

type AuthenticationLayoutProps = {
  children: React.ReactNode;
};

const AuthenticationLayout: FunctionComponent<AuthenticationLayoutProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default AuthenticationLayout;
