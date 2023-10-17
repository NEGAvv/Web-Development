import React, { useState } from 'react';
import '../ProductDetails/ProductDetails.css'
function ProductDetails({ product }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const addComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      setComment('');
    }
  };

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
        <button onClick={addComment}>Додати</button>
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
