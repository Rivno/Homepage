import { MoreActions } from './moreActions';

import styles from './notesApp.module.css';

export function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.content_scroll}>
        <div>
          {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nisi accusamus. Labore assumenda cum, eaque reiciendis minima atque quaerat corporis suscipit porro natus, fugiat ex nam eum laboriosam dicta nesciunt beatae excepturi provident aut nobis voluptatem explicabo! Error laborum voluptatem veniam quod porro voluptatum dolores corporis possimus fugiat quos maxime veritatis perferendis ipsum consequuntur voluptate minima iure, dolor placeat pariatur ratione maiores! Nisi sapiente corrupti nulla, quos magnam tempora ipsum cupiditate.

            Adipisci, tempora. Odit voluptate, ab facere quam ratione alias omnis excepturi hic at, tempora quas praesentium accusantium maiores doloribus a, reprehenderit quia quidem! Fugiat consectetur laudantium quidem vel ut suscipit, cum quam vero molestiae sed assumenda corrupti velit, excepturi nobis natus libero inventore cupiditate.

            Fugit consectetur dicta perferendis doloribus? Molestiae vitae a asperiores atque ea nulla sunt accusamus nemo eum, quos quidem praesentium voluptatibus perferendis autem sit odit maxime veritatis reprehenderit iste? Nihil, id quisquam! Aliquam eveniet ab veniam, perspiciatis eius, dignissimos odio modi nobis esse odit, voluptatem cum illo labore similique. Iusto tempora accusamus, nesciunt provident possimus deleniti fugiat itaque voluptas molestias maiores labore unde placeat dolorum nihil esse natus. Est fuga quam quaerat ad? Consequuntur quas eaque, labore veritatis alias obcaecati iste autem quod atque unde similique odio vel, fuga, laudantium voluptates esse culpa ipsa totam?

            Perferendis quae qui distinctio culpa excepturi esse quidem aliquid, explicabo necessitatibus fugiat eaque vel ea aperiam itaque corporis vitae modi voluptas!

            Asperiores unde velit et voluptate deleniti molestias libero rerum. Eum molestias dolore quidem consectetur harum natus, eos totam architecto quo voluptatem, minus placeat accusantium dolor doloribus dignissimos animi voluptates esse quaerat maxime aliquam nobis quod expedita voluptatibus! Quis, placeat cupiditate. Similique esse excepturi rem recusandae asperiores! Praesentium reprehenderit eligendi at odio hic officiis recusandae aperiam earum nobis velit enim delectus impedit laborum culpa, consectetur provident adipisci dicta asperiores tenetur? Accusamus?`}
        </div>
      </div>
      <div className={styles.content_actions}>
        <button>
          <svg viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M224 448a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32V480a32 32 0 0 0-32-32H224zm0-64h576a96 96 0 0 1 96 96v384a96 96 0 0 1-96 96H224a96 96 0 0 1-96-96V480a96 96 0 0 1 96-96z"
            />
            <path
              fill="currentColor"
              d="M512 544a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V576a32 32 0 0 1 32-32zm192-160v-64a192 192 0 1 0-384 0v64h384zM512 64a256 256 0 0 1 256 256v128H256V320A256 256 0 0 1 512 64z"
            />
          </svg>
        </button>
        <div>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920">
              <path
                d="M1478.496 1318.496c132.692 0 240.602 107.91 240.602 240.602 0 132.691-107.91 240.601-240.602 240.601-132.691 0-240.601-107.91-240.601-240.601 0-21.053 3.609-41.143 8.661-60.632 10.467-39.94 30.557-76.03 58.346-105.143 43.79-45.834 105.263-74.827 173.594-74.827ZM440.902 716.992c67.61 0 128.481 28.15 172.27 73.143 28.031 28.873 48.121 64.842 58.948 104.782 5.534 20.09 9.384 40.782 9.384 62.677 0 24.18-4.692 47.278-11.429 69.293-11.91 39.459-32.962 74.948-61.955 103.098-43.308 41.985-102.135 68.21-167.218 68.21-132.691 0-240.601-107.91-240.601-240.601 0-132.692 107.91-240.602 240.601-240.602Zm1037.594-596.691c132.692 0 240.602 107.91 240.602 240.601 0 132.692-107.91 240.602-240.602 240.602-67.488 0-128.24-28.03-171.91-72.782-28.15-28.872-48.36-64.842-59.188-104.782-5.533-20.21-9.503-41.023-9.503-63.038 0-132.691 107.91-240.601 240.601-240.601Zm0 1077.894c-112.842 0-212.571 53.053-278.737 134.497L776.421 1088.24c15.88-40.662 25.384-84.452 25.384-130.647 0-43.79-9.023-85.173-23.339-124.03l422.978-244.33c66.285 80.24 165.173 132.57 277.052 132.57 198.978 0 360.902-161.924 360.902-360.902C1839.399 161.925 1677.475 0 1478.496 0c-198.977 0-360.902 161.925-360.902 360.902 0 43.91 9.023 85.534 23.459 124.391l-422.858 244.21c-66.165-80.36-165.172-132.811-277.293-132.811C241.925 596.692 80 758.617 80 957.594c0 198.977 161.925 360.902 360.902 360.902 109.594 0 206.797-50.165 272.963-127.519l426.346 246.136c-13.835 38.376-22.617 79.037-22.617 121.985 0 198.977 161.925 360.902 360.902 360.902 198.978 0 360.902-161.925 360.902-360.902 0-198.978-161.924-360.903-360.902-360.903"
                fill="currentColor"
              />
            </svg>
          </button>
          <button className={styles.button_trash}>
            <svg viewBox="2 2 60 60">
              <g id="trash">
                <path
                  d="M19.186,16.493l0,-1.992c0.043,-3.346 2.865,-6.296 6.277,-6.427c3.072,-0.04 10.144,-0.04 13.216,0c3.346,0.129 6.233,3.012 6.277,6.427l0,1.992l9.106,0l0,4l-4.442,0l0,29.11c-0.043,3.348 -2.865,6.296 -6.278,6.428c-7.462,0.095 -14.926,0.002 -22.39,0.002c-3.396,-0.044 -6.385,-2.96 -6.429,-6.43l0,-29.11l-4.443,0l0,-4l9.106,0Zm26.434,4l-27.099,0c-0.014,9.72 -0.122,19.441 0.002,29.16c0.049,1.25 1.125,2.33 2.379,2.379c7.446,0.095 14.893,0.095 22.338,0c1.273,-0.049 2.363,-1.163 2.38,-2.455l0,-29.084Zm-4.701,-4c-0.014,-0.83 0,-1.973 0,-1.973c0,0 -0.059,-2.418 -2.343,-2.447c-3.003,-0.039 -10.007,-0.039 -13.01,0c-1.273,0.049 -2.363,1.162 -2.38,2.454l0,1.966l17.733,0Z"
                  fill="currentColor"
                />
                <rect
                  x="22.58"
                  y="28.099"
                  width="3"
                  height="16.327"
                  fill="currentColor"
                />
                <rect
                  x="30.571"
                  y="28.099"
                  width="3"
                  height="16.327"
                  fill="currentColor"
                />
                <rect
                  x="38.58"
                  y="28.099"
                  width="3"
                  height="16.327"
                  fill="currentColor"
                />
              </g>
            </svg>
          </button>
          <MoreActions />
        </div>
      </div>
    </div>
  );
}
