import React, {useState} from 'react';
import useReviews from '../../hooks/useReviews'
import '../ProductDetails/ProductDetails.css';

function ProductDetails({ product }) {
  const [comment, setComment] = useReviews(null,"lastComment"); 
  const [comments, setComments] = useState([]);


  const handleCommentChange = (e) => {
    setComment(e.target.value);
    // console.log(e.target.value)
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      setComments([...comments, comment]);
      console.log(comment)
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
