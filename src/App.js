import Rotas from './routes';
import './styles/all.css';
import HeaderProvider from './contexts/header_scripts';

function App() {
  return (
    <HeaderProvider>
      <div>
        <Rotas/>
      </div>
    </HeaderProvider>
  );
}

export default App;
