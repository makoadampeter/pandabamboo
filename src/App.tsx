import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Ingredients from './pages/Ingredients';
import Premade from './pages/Premade';
import Drinks from './pages/Drinks';
import ShoppingList from './pages/ShoppingList';
import Settings from './pages/Settings';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/premade" element={<Premade />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/shoppinglist" element={<ShoppingList />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
