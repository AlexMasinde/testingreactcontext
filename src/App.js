import ActivityList from './ActivityList';
import './App.css';
import { SelectedActivityContextProvider } from './selectedActivityContext';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
     <SelectedActivityContextProvider >
     <ActivityList/>
     </SelectedActivityContextProvider>
    </div>
  );
}

export default App;
