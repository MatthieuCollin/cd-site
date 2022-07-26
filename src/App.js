import './App.css';
import { Route, Routes } from 'react-router-dom';
import Records from './components/records';
import Homepage from './components/homepage';
import Layout from './components/layout';
import Record from './components/record';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path='/records' element={<Records />} />
        <Route path='/record/:id' element={<Record />} />
      </Route>
    </Routes>
  );
}

export default App;
