import { useEffect, useState } from "react";

// Hook til at hente en opskrift baseret på ID
const useFetchById = (id) => {
  const [product, setProduct] = useState(null);

  const fetchProductById = async (id) => {
    if (!id) return;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    fetchProductById(id);
  }, [id]);

  return { product };
};

export default useFetchById;
