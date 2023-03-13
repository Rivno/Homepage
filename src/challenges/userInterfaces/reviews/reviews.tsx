import preview from '../../../../public/challenges/20230313.png';

import { SearchInput } from './searchInput';
import { Stars } from './stars';

import styles from './reviews.module.css';

const reviews = [
  {
    name: 'Jesse Hopkins',
    rating: 5,
    review:
      'Gorgeous design! Even more responsive than the previous version. A pleasure to use!',
    date: '02/13/2023',
  },

  {
    name: 'Alice Banks',
    rating: 4,
    review:
      'The device has a clean design, and the metal housing feels sturdy in my hands. Soft rounded courners make it a pleasure to look at.',
    date: '02/04/2023',
  },
];

function Reviews() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2>Reviews</h2>
        <SearchInput placeholder="Search reviews" />
        <div className={styles.filters}>
          <input
            type="radio"
            name="filter"
            value="experience"
            data-label="Experience"
          />
          <input
            type="radio"
            name="filter"
            value="quality"
            data-label="Quality"
          />
          <input
            type="radio"
            name="filter"
            value="design"
            data-label="Design"
            defaultChecked
          />
          <input type="radio" name="filter" value="size" data-label="Size" />
          <input
            type="radio"
            name="filter"
            value="features"
            data-label="Features"
          />
          <input type="radio" name="filter" value="value" data-label="Value" />
          <input
            type="radio"
            name="filter"
            value="replacement"
            data-label="Replacement"
          />
        </div>
        <div className={styles.reviews}>
          {reviews.map((review, i) => (
            <div key={`${review.date}-${i}`} className={styles.review}>
              <div className={styles.space_between}>
                <h2 data-default={review.name.substring(0, 1)}>
                  {review.name}
                </h2>
                <Stars rating={review.rating} />
              </div>
              <p>{review.review}</p>
              <div className={styles.space_between}>
                <div>
                  {new Date(review.date).toLocaleString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1920 1920"
                  >
                    <path
                      d="M1478.496 1318.496c132.692 0 240.602 107.91 240.602 240.602 0 132.691-107.91 240.601-240.602 240.601-132.691 0-240.601-107.91-240.601-240.601 0-21.053 3.609-41.143 8.661-60.632 10.467-39.94 30.557-76.03 58.346-105.143 43.79-45.834 105.263-74.827 173.594-74.827ZM440.902 716.992c67.61 0 128.481 28.15 172.27 73.143 28.031 28.873 48.121 64.842 58.948 104.782 5.534 20.09 9.384 40.782 9.384 62.677 0 24.18-4.692 47.278-11.429 69.293-11.91 39.459-32.962 74.948-61.955 103.098-43.308 41.985-102.135 68.21-167.218 68.21-132.691 0-240.601-107.91-240.601-240.601 0-132.692 107.91-240.602 240.601-240.602Zm1037.594-596.691c132.692 0 240.602 107.91 240.602 240.601 0 132.692-107.91 240.602-240.602 240.602-67.488 0-128.24-28.03-171.91-72.782-28.15-28.872-48.36-64.842-59.188-104.782-5.533-20.21-9.503-41.023-9.503-63.038 0-132.691 107.91-240.601 240.601-240.601Zm0 1077.894c-112.842 0-212.571 53.053-278.737 134.497L776.421 1088.24c15.88-40.662 25.384-84.452 25.384-130.647 0-43.79-9.023-85.173-23.339-124.03l422.978-244.33c66.285 80.24 165.173 132.57 277.052 132.57 198.978 0 360.902-161.924 360.902-360.902C1839.399 161.925 1677.475 0 1478.496 0c-198.977 0-360.902 161.925-360.902 360.902 0 43.91 9.023 85.534 23.459 124.391l-422.858 244.21c-66.165-80.36-165.172-132.811-277.293-132.811C241.925 596.692 80 758.617 80 957.594c0 198.977 161.925 360.902 360.902 360.902 109.594 0 206.797-50.165 272.963-127.519l426.346 246.136c-13.835 38.376-22.617 79.037-22.617 121.985 0 198.977 161.925 360.902 360.902 360.902 198.978 0 360.902-161.925 360.902-360.902 0-198.978-161.924-360.903-360.902-360.903"
                      fill="currentColor"
                    />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export const challenge = {
  Component: Reviews,
  number: 20230313,
  preview,
  title: 'Reviews',
};
