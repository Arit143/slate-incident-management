import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from './components/Header';

import { routes } from './routes/routes';
import { theme } from './styles/theme';

const App: React.FC = () => {
  return (
    <>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Container fixed>
          {routes.map((route, idx) => <Route  key={idx} exact={route.exact} path={route.path} component={route.component} />)}
        </Container>
      </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
