import { Header } from './components/Header/Header';
import { Catalog } from './pages/Catalog/Catalog';
// import { BookDetails } from './pages/BookDetails/BookDetails';

import './App.css';
import { categories } from './constants/mock';

export function App() {
  return (
    <>
      <Header />
      <Catalog categories={categories} />
      {/* <BookDetails book={categories[0].books[0]} /> */}
    </>
  );
}
