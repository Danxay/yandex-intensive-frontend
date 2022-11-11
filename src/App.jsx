import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Catalog } from './pages/Catalog/Catalog';
import { BookDetails } from './pages/BookDetails/BookDetails';
import { Cart } from './pages/Cart/Cart';

import './App.css';
import { store } from './store';

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Catalog />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:bookId" element={<BookDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
