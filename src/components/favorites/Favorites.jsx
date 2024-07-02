import useFetch from "../../hooks/useFetch";
import ProductCard from "../productCard/ProductCard";

const Favorites = () => {
  const { rating } = useFetch();

  return (
    <section className='products'>
      {rating.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </section>
  );
};

export default Favorites;
