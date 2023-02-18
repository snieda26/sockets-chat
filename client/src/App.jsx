import { Routes, Route } from 'react-router-dom'
import Button from './components/Button';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Button />} />
      </Routes>
    </div>
  );
}

export default App;
