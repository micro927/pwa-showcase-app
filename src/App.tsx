import { BrowserRouter } from 'react-router-dom';
import Router from './Router';
import './App.css';
import ThemeProvider from './components/provider/themeProvider';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
