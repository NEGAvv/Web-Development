// useReviews.js
import { useState, useEffect } from 'react';

function useReviews() {
    const getValue = () => {
        const storage = localStorage.getItem(key);
        if (storage) {
          return JSON.parse(storage);
        }
        return initialValue;
      };
    
      const [value, setValue] = useState(getValue);
      useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
      }, [value]);
      return [value, setValue];
      
//   const [reviews, setReviews] = useState([]);
//   const [comment, setComment] = useState('');

//   useEffect(() => {
//     // Перевіряємо localStorage під час ініціалізації
//     const storedReviews = localStorage.getItem('reviews');
//     const storedComment = localStorage.getItem('comment');

//     if (storedReviews) {
//       setReviews(JSON.parse(storedReviews));
//     }

//     if (storedComment) {
//       setComment(storedComment);
//     }
//   }, []); // Передайте пустий масив для ініціалізації лише після завантаження компонента

//   useEffect(() => {
//     // Зберігаємо відгуки в localStorage після змін стану
//     localStorage.setItem('reviews', JSON.stringify(reviews));
//     localStorage.setItem('comment', comment);
//   }, [reviews, comment]);

//   const addComment = (productId, commentText) => {
//     if (typeof commentText === 'string' && commentText.trim() !== '') {
//       const newReview = {
//         productId,
//         comment: commentText,
//       };

//       setReviews([...reviews, newReview]);
//       setComment(''); // Очищаємо поле коментаря
//     }
//   };

//   const getReviewsByProduct = (productId) => {
//     return reviews.filter((review) => review.productId === productId);
//   };

//   return { reviews, comment, addComment, getReviewsByProduct };
}

export default useReviews;
