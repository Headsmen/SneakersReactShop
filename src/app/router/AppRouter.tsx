import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/home';
import { FavoritesPage } from '../../pages/favorites';
import { CartPage } from '../../pages/cart';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
