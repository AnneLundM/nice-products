import { useEffect, useMemo, useState } from "react";

// Hook til at hente alle opskrifter
const useFetch = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  // useMemo gemmer produkterne, så de ikke bliver filtreret igen medmindre products ændres.

  let groceries = useMemo(
    () => products.filter((p) => p.category.includes("groceries")),
    [products]
  );
  let beauty = useMemo(
    () => products.filter((p) => p.category.includes("beauty")),
    [products]
  );
  let furniture = useMemo(
    () => products.filter((p) => p.category.includes("furniture")),
    [products]
  );
  let rating = useMemo(
    () => products.filter((p) => p.rating > 4.7),
    [products]
  );

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    rating,
    furniture,
    beauty,
    groceries,
  };
};

export default useFetch;
