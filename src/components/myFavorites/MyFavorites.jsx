import { useLocalStorage } from "@uidotdev/usehooks";
import useFetch from "../../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";

const MyFavorites = () => {
  const { products } = useFetch();
  const [favorites] = useLocalStorage("favorites", []);

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <section className='products'>
      {favoriteProducts?.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </section>
  );
};

export default MyFavorites;
