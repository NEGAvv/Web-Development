import React, { useContext, useState } from "react";
import useReviews from "../../hooks/useReviews";
import styles from "../ProductDetails/ProductDetails.module.css";
import Dialog from "../Dialog/Dialog";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

function ProductDetails({ product }) {
  const [comment, setComment] = useReviews(null, "lastComment");
  const [comments, setComments] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setIsDialogOpen(true);
    }
  };

  return (
    <div className={styles.product_details}>
      <div className={styles.product_info}>
        <h2>{product.name}</h2>
        <div className={styles.image_container}>
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <h3>Ціна: {product.price} грн</h3>
      </div>
      <div className={styles.comment_section}>
        <AddToCartButton product={product} />
        <h3>Додати коментар</h3>
        <div className={styles.addComment}>
          <input
            type="text"
            onChange={handleCommentChange}
            placeholder="Ваш коментар"
          />
          <button className={styles.addCommentBtn} onClick={handleAddComment}>
            Додати
          </button>
        </div>

        <div className={styles.comments}>
          <h3>Коментарі:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
      <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
        <p>Дякуємо за ваш коментар!</p>
      </Dialog>
    </div>
  );
}

export default ProductDetails;
