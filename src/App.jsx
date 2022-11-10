import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Catalog } from './pages/Catalog/Catalog';
import { BookDetails } from './pages/BookDetails/BookDetails';

import './App.css';
import { categories } from './constants/mock';
import { store } from './store';

export function App() {
  return (
    <Provider store={store}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Catalog categories={categories} />} />
          <Route path="/catalog" element={<Catalog categories={categories} />} />
          <Route path="/catalog/:bookId" element={<BookDetails book={categories[0].books[0]} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
