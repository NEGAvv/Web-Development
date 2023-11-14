import React, { useContext, useState } from "react";
import useReviews from "../../hooks/useReviews";
import "../ProductDetails/ProductDetails.css";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../HOC/Providers/ProductProvider";

function ProductDetails() {
  const [comment, setComment] = useReviews(null, "lastComment");
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value)
  };

  const handleAddComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      console.log(comment);
    }
  };

  const { id } = useParams();
  const value = useContext(ProductContext);
  const currentProduct = value.products.filter(
    (productValue) => productValue.id == id
  )[0];

  return (
    <div className="product-details">
      <div className="product-info">
        <h2>{currentProduct.name}</h2>
        <img src={currentProduct.imageUrl} alt={currentProduct.name} />
        <h3>Ціна: {currentProduct.price} грн</h3>
      </div>
      <div className="comment-section">
        <h3>Додати коментар</h3>
        <input
          type="text"
          onChange={handleCommentChange}
          placeholder="Ваш коментар"
        />
        <button onClick={handleAddComment}>Додати</button>
        <div className="comments">
          <h3>Коментарі:</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
