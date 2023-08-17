import { BrowserRouter as Router} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// routes
import Routes from './routes';
// theme
import ThemeProvider from './theme';
// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Routes />
        </ThemeProvider>
      </Router>
    </HelmetProvider>
  );
}
