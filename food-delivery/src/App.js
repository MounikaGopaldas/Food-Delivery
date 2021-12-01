import './App.css';
import Header from './components/layout/Header';
import {useState} from 'react';
import Meals from './components/meals/Meals';
import Cart from './components/cart/Cart';
import CartProvider from './components/store/CartProvider';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
    <div className="App">
      <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <main>
          <Meals />
        </main>
      </CartProvider>
    </div>
  );
}

export default App;
