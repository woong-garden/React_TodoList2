import './App.css';
import MainBox from './components/mainbox/MainBox';
import { DarkModeProvider } from './context/DarkModeContext';


function App({ DarkModeContext }) {
  return (
    <DarkModeProvider>
      <MainBox DarkModeContext={DarkModeContext}/>
    </DarkModeProvider>
  );
}

export default App;
