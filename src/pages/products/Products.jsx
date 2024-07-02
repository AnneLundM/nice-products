import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import PageHeader from "../../components/pageHeader/PageHeader";
import Button from "../../components/button/Button";
import useFetchById from "../../hooks/useFetchById";
import ProductCard from "../../components/productCard/ProductCard";
import styles from "../../components/button/button.module.css";

const Products = () => {
  // Henter produkter fra en custom hook
  const { products, furniture, beauty, groceries } = useFetch();
  const { product } = useFetchById(12);

  // Opretter en tilstand, der indeholder de filtrerede produkter.
  // Den initialiseres med alle produkter
  const [filteredproducts, setFilteredproducts] = useState([
    ...furniture,
    ...beauty,
    ...groceries,
  ]);

  // Opretter en tilstand, der holder styr på det aktive filter.
  // Den initialiseres til at vise alle produkter.
  const [activeFilter, setActiveFilter] = useState("All");

  // Definerer et objekt, som indeholder arrays af filtrene.
  const filters = {
    All: products,
    Furniture: furniture,
    Beauty: beauty,
    Groceries: groceries,
  };

  // Funktion der håndterer ændring af filter.
  // Opdaterer det aktive filter og de filtrerede produkter baseret på det valgte filter.
  const handleFilterChange = (filter) => {
    setActiveFilter(filter); // Sætter det aktive filter til det valgte filter
    setFilteredproducts(filters[filter]); // Opdaterer de filtrerede produkter baseret på det valgte filter
  };

  // Brug de filtrerede produkter hvis tilgængelige, ellers brug alle produkter
  const productsArray =
    filteredproducts?.length > 0 ? filteredproducts : products;

  return (
    <section>
      <PageHeader title='Produkter' headerImg={product?.images[0]} />
      <div className='filters'>
        <Button
          title='All'
          className={activeFilter === "All" ? `${styles.active}` : ""}
          onClick={() => handleFilterChange("All")}></Button>
        <Button
          title='Furniture'
          className={activeFilter === "Furniture" ? `${styles.active}` : ""}
          onClick={() => handleFilterChange("Furniture")}></Button>
        <Button
          title='Beauty'
          className={activeFilter === "Beauty" ? `${styles.active}` : ""}
          onClick={() => handleFilterChange("Beauty")}></Button>
        <Button
          title='Groceries'
          className={activeFilter === "Groceries" ? `${styles.active}` : ""}
          onClick={() => handleFilterChange("Groceries")}></Button>
      </div>

      <div className='products'>
        {productsArray.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default Products;
