import Rotas from './routes';
import './styles/all.css';
import HeaderProvider from './contexts/Header';
import ElencoProvider from './contexts/Elenco';

function App() {
  return (
    <HeaderProvider>
      <ElencoProvider>
        <div>
          <Rotas/>
        </div>
      </ElencoProvider>
    </HeaderProvider>
  );
}

export default App;
