import './App.css';
import Home from './Pages/Home/Home';
import Edit from './Pages/Edit/Edit';
import Create from './Pages/Create/Create';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path="/:id" element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App
