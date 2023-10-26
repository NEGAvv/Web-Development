import React, {useState} from 'react';
import useReviews from '../../hooks/useReviews'
import '../ProductDetails/ProductDetails.css';

function ProductDetails({ product }) {
  const [comment, setComment] = useReviews(); // Оголошуємо стан коментаря



  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      // Додаємо коментар до хука useReviews
      addComment(product.id, comment);
      setComment(''); // Очищаємо поле коментаря
    }
  };

  const productReviews = getReviewsByProduct(product.id);

  return (
    <div className="product-details">
      <div className="product-info">
        <h2>{product.name}</h2>
        <img src={product.imageUrl} alt={product.name} />
        <h3>Ціна: {product.price} грн</h3>
      </div>
      <div className="comment-section">
        <h3>Додати коментар</h3>
        <input
          type="text"
          value={comment}
          onChange={handleCommentChange}
          placeholder="Ваш коментар"
        />
        <button onClick={handleAddComment}>Додати</button>
        <div className="comments">
          <h3>Коментарі:</h3>
          <ul>
            {productReviews.map((review, index) => (
              <li key={index}>{review.comment}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
