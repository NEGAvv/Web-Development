import React, { useContext, useState } from "react";
import useReviews from "../../hooks/useReviews";
import styles from "../ProductDetails/ProductDetails.module.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../HOC/Providers/ProductProvider";
import Dialog from "../Dialog/Dialog";
import { useSelector } from "react-redux";

function ProductDetails() {
  const [comment, setComment] = useReviews(null, "lastComment");
  const [comments, setComments] = useState([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value)
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      console.log(comment);
      setIsDialogOpen(true);
    }
  };

  const { id } = useParams();
  // const value = useContext(ProductContext);

  const productState = useSelector((state) => state.products);

  const currentProduct = productState.filter(
    (productValue) => productValue.id == id
  )[0];

  return (
    <div className={styles.product_details}>
      <div className={styles.product_info}>
        <h2>{currentProduct.name}</h2>
        <img src={currentProduct.imageUrl} alt={currentProduct.name} />
        <h3>Ціна: {currentProduct.price} грн</h3>
      </div>
      <div className={styles.comment_section}>
        <h3>Додати коментар</h3>
        <input
          type="text"
          onChange={handleCommentChange}
          placeholder="Ваш коментар"
        />
        <button onClick={handleAddComment}>Додати</button>
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
