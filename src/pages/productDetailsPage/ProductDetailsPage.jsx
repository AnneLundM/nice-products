import { useParams } from "react-router-dom";
import PageHeader from "../../components/pageHeader/PageHeader";
import useFetchById from "../../hooks/useFetchById";
import styles from "./productDetails.module.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { product } = useFetchById(id);
  console.log(product);

  return (
    <section>
      {product && (
        <>
          <PageHeader title={product.title} headerImg={product.images[0]} />
          <div className={styles.container}>
            <div className={styles.details}>
              <div className={styles.description}>
                <h3>Description</h3>
                <p>{product.description}</p>
              </div>
              <div className={styles.info}>
                <h3>Info</h3>
                <p>Price: {product.price}</p>
                <p>SKU: {product.sku}</p>
                <p>{product.availabilityStatus}</p>
                <p>{product.warrantyInformation}</p>
                <p>{product.returnPolicy}</p>
              </div>
              <div className={styles.dimensions}>
                <h3>Dimensions</h3>
                <p>Width: {product.dimensions.width} inches</p>
                <p>Height: {product.dimensions.height} inches</p>
                <p>Depth: {product.dimensions.depth} inches</p>
              </div>
              <div className={styles.reviews}>
                <h3>Reviews</h3>
                {product.reviews.map((review, index) => (
                  <div key={index} className={styles.review}>
                    <p>
                      <strong>{review.reviewerName}</strong> (
                      {new Date(review.date).toLocaleDateString()})
                    </p>
                    <p>
                      Rating: {review.rating} - {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default ProductDetailsPage;
