import { CategoriesProvider } from "./context/CategoriesProvider";
import { DrinksProvider } from './context/DrinksProvider';
import { CartProvider } from './context/CartProvider';
import MainLayout from "./layout";
import AppRoutes from "./routes";
import { ModalProvider } from "./context/ModalProvider";

function App() {
  return (
    <ModalProvider>
      <CartProvider>
        <MainLayout>
          <DrinksProvider>
            <CategoriesProvider>
              <AppRoutes />
            </CategoriesProvider>
          </DrinksProvider>
        </MainLayout >
      </CartProvider>
    </ModalProvider>

  )
}

export default App;
