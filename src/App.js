import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import Home from './pages/Home';
import MovieDetail from './components/MovieDetail'

function App() {
  return (
    <div className="App">
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie/:id' element={<MovieDetail/>}/>
      <Route path='movies/:type' element={<MovieList/>}/>
     </Routes>
    </div>
  );
}

export default App;
