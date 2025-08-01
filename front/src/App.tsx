import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Content from "./components/Content";
import { FavoriteProvider } from "./contexts/FavoritesContext";
import { FiltersProvider } from "./contexts/FiltersContext";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext";
import { AccountProvider } from "./contexts/AccountContext";
function App() {
  return (
    <BrowserRouter>
      <AccountProvider>
        <CartProvider>
          <FiltersProvider>
            <FavoriteProvider>
              <Routes>
                <Route path="/" element={<Content />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </FavoriteProvider>
          </FiltersProvider>
        </CartProvider>
      </AccountProvider>
    </BrowserRouter>
  );
}

export default App;
