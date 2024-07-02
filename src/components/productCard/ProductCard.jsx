import { Link } from "react-router-dom";
import styles from "./productCard.module.css";
import { useLocalStorage } from "@uidotdev/usehooks";
import { TbHeartFilled } from "react-icons/tb";
import { PiHeartBreakFill } from "react-icons/pi";

const ProductCard = ({ product }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const isFavorite = favorites.includes(product.id);

  const handleLike = () => {
    setFavorites((prevFavorites) =>
      isFavorite
        ? prevFavorites.filter((fav) => fav !== product.id)
        : [...prevFavorites, product.id]
    );
  };

  return (
    <figure className={styles.productCard}>
      <Link to={`/products/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>
      <figcaption>
        <h2>{product.title}</h2>
        {isFavorite ? (
          <PiHeartBreakFill size={30} onClick={handleLike} color='green' />
        ) : (
          <TbHeartFilled size={30} onClick={handleLike} color='green' />
        )}
      </figcaption>
    </figure>
  );
};

export default ProductCard;
