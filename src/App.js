import logo from './logo.svg';
import './App.css';
import Resource from './Components/Resource';
import Header from './Components/Header';
import AddResource from './Components/AddResource';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Resource />} />
          <Route path='/addResource' element={<AddResource />} />
        </Routes>
        {/* <Resource /> */}
        {/* <AddResource /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
