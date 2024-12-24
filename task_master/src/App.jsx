import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppContextProvider from './Components/Context/AppContext';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';
import Edit from './Pages/Edit/Edit';


function App() {
  return (
    <AppContextProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Create' element={<Create />} />
        <Route path="/:id" element={<Edit />} />
      </Routes>
    </AppContextProvider>
  )
}

export default App
