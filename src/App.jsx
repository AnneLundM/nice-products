import { useRoutes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Products from "./pages/products/Products";
import ProductDetailsPage from "./pages/productDetailsPage/ProductDetailsPage";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/products", element: <Products /> },
    { path: "/products/:id", element: <ProductDetailsPage /> },
  ]);

  return (
    <div className='app-container'>
      <Navigation />
      <div className='app-content'>{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
