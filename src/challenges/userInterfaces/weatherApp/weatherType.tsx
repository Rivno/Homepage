export const weatherType: Record<string, React.ReactNode> = {
  cloudy: (
    <svg viewBox="0 -8.5 64 64">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Weather-cloud-sun"
          transform="translate(1.000000, 0.000000)"
          stroke="#6B6C6E"
          strokeWidth="2"
        >
          <g id="Group" transform="translate(0.000000, 10.000000)">
            <path
              d="M13.7,8.9 C16.6,3.6 22.3,0 28.8,0 C38.3,0 46,7.6 46,17.1 C46,18.4 45.8,19.7 45.6,20.9"
              id="Shape"
            ></path>
            <path
              d="M46.4,14.5 C47.5,14.1 48.7,14 49.9,14 C56,14 61,18.9 61,25 C61,31.1 56,36 49.9,36 L12.6,36 C5.1,36 0,29.9 0,22.5 C0,15 5.1,9 12.6,9 C16.1,9 19.3,10.3 21.7,12.4"
              id="Shape"
            ></path>
          </g>
          <path
            d="M36.2,11 C38.2,8.6 41.3,7 44.7,7 C50.8,7 55.7,11.9 55.7,18 C55.7,20.2 55,22.3 53.9,24"
            id="Shape"
          ></path>
          <path d="M45,0 L45,4" id="Shape"></path>
          <path d="M32,5.3 L34.8,8.1" id="Shape"></path>
          <path d="M63,18 L58.2,18" id="Shape"></path>
          <path d="M57.5,5.3 L54.6,8.1" id="Shape"></path>
        </g>
      </g>
    </svg>
  ),
  rain: (
    <svg viewBox="0 -2.5 64 64">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Weather-cloud-sun-rain"
          transform="translate(1.000000, 0.000000)"
          stroke="#6B6C6E"
          strokeWidth="2"
        >
          <g id="Group" transform="translate(0.000000, 10.000000)">
            <path
              d="M14.7,8.9 C17.6,3.6 23.3,0 29.8,0 C39.3,0 47,7.6 47,17.1 C47,18.4 46.8,19.7 46.6,20.9"
              id="Shape"
            ></path>
            <path
              d="M47.4,14.5 C48.5,14.1 49.7,14 50.9,14 C57,14 62,18.9 62,25 C62,31.1 57,36 50.9,36 L13.6,36 C6.1,36 0,29.9 0,22.5 C0,15 6.1,9 13.6,9 C17.1,9 20.3,10.3 22.7,12.4"
              id="Shape"
            ></path>
          </g>
          <path
            d="M37.2,11 C39.2,8.6 42.3,7 45.7,7 C51.8,7 56.7,11.9 56.7,18 C56.7,20.2 56,22.3 54.9,24"
            id="Shape"
          ></path>
          <path d="M45,0 L45,4" id="Shape"></path>
          <path d="M33,5.3 L35.8,8.1" id="Shape"></path>
          <path d="M63,18 L60,18" id="Shape"></path>
          <path d="M58.5,5.3 L55.6,8.1" id="Shape"></path>
          <path d="M17,50 L13,58" id="Shape"></path>
          <path d="M31,50 L27,58" id="Shape"></path>
          <path d="M46,50 L42,58" id="Shape"></path>
        </g>
      </g>
    </svg>
  ),
  storm: (
    <svg viewBox="0 -5.5 64 64">
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Weather-cloud-bolt-rain"
          transform="translate(1.000000, 1.000000)"
          strokeWidth="2"
          stroke="#6B6C6E"
        >
          <g id="Group">
            <path
              d="M14.7,8.9 C17.6,3.6 23.3,0 29.8,0 C39.3,0 47,7.6 47,17.1 C47,18.4 46.8,19.7 46.6,20.9"
              id="Shape"
            ></path>
            <path
              d="M27,36 L13.6,36 C6.1,36 0,29.9 0,22.5 C0,15 6.1,9 13.6,9 C17.1,9 20.3,10.3 22.7,12.4"
              id="Shape"
            ></path>
            <path
              d="M47.4,14.5 C48.5,14.1 49.7,14 50.9,14 C57,14 62,18.9 62,25 C62,31.1 57,36 50.9,36 L35,36"
              id="Shape"
            ></path>
          </g>
          <path d="M17,40 L13,48" id="Shape"></path>
          <path d="M34,31 L27,43 L33,41 L27,51" id="Shape"></path>
          <path d="M46,40 L42,48" id="Shape"></path>
        </g>
      </g>
    </svg>
  ),
};
