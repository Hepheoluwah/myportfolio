import * as React from "react";
import { FaWhatsapp } from 'react-icons/fa';





export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M17.57 3H21l-7.43 8.29L22 21h-6.07l-4.98-5.74L5.43 21H2l7.85-8.75L2 3h6.07l4.64 5.34L17.57 3zm-1.02 2.01l-4.03 4.43L7.99 5.01H5.88l5.92 6.65-6.14 6.86h2.1l4.2-4.7 4.31 4.7h2.1l-6.14-6.86 6.14-6.65h-2.1z"
    />
  </svg>
);

export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h512v512H0z" />
    <path
      fill="currentColor"
      d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"
    />
  </svg>
);

export const SunnnytoMoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    >
      <path d="M12 21v1m9-10h1M12 3V2M3 12H2">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.2s"
          values="4;2"
        />
      </path>
      <path d="m18.5 18.5.5.5m-.5-13.5L19 5m-13.5.5L5 5m.5 13.5L5 19">
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="0.2s"
          dur="0.2s"
          values="4;2"
        />
      </path>
    </g>
    <g fill="none" fillOpacity={0}>
      <path d="m15.22 6.03 2.53-1.94L14.56 4 13.5 1l-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25 15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25 21.25 11l-2.06-.05L18.5 9l-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731 1.876-1.439-2.366-.067L19.552 6l-.786 2.225-2.366.067 1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="a">
      <circle cx={12} cy={12} r={12} fill="#fff" />
      <circle cx={22} cy={2} r={3} fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx={22} cy={2} r={1}>
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle cx={12} cy={12} r={6} fill="currentColor" mask="url(#a)">
      <set attributeName="opacity" begin="0.5s" to={0} />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const DribbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const LinkIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="rgba(255, 255, 255, 0)" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);



export const WhatsAppIcon = ({ className, ...rest }) => (
  <FaWhatsapp 
    className={`w-full h-auto ${className}`} 
    style={{ color: '#25D366' }} 
    {...rest} 
  />
);


export const CircularText = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={400}
    height={400}
    viewBox="0 0 300 300"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path d="M163.6 37.7c-2.3 8.3-3.6 17.2-2.8 19.3 1.5 3.9 4.7 6.2 9.5 6.7 7.8.9 10.2-1.8 13.1-14.6 1.6-7.5 1.5-9.1-.8-9.1-.9 0-1.6 1.8-2.1 4.6-1.9 12.9-5 17.5-10.9 16s-6.7-4.7-3.8-16.3c1.6-6.1 1.6-7.3.4-7.8-1.9-.7-2-.7-2.6 1.2zM122.1 46.9c-2.1 2.3-3.1 2.8-3.1 1.7 0-.9-.7-1.6-1.5-1.6-1.9 0-1.9-.1 1 9.9 2.8 9.4 2.8 9.6 4.9 8.8 1.2-.5 1.2-1.4-.4-6.4-1.9-6.3-1.5-9.2 1.7-10.8 1.4-.7 1.8-1.6 1.3-3-.7-1.9-.9-1.8-3.9 1.4zM189.3 56.7c-5 11.1-5.4 13.2-2.3 13.3.3 0 2.9-5.3 5.8-11.7 3.9-8.7 4.9-11.9 3.9-12.5-.6-.4-1.4-.8-1.7-.7-.3 0-2.9 5.2-5.7 11.6zM201.1 61.8c-10.5 8.7-13.7 11.8-12.6 12.4 1 .6 5-2.1 13.7-9.3 16.6-13.8 16.3-13.5 14.4-14.2-1-.4-6.4 3.4-15.5 11.1zM102.9 53.2c-4.5 1.7-6.9 4.9-6.9 9.1 0 8.6 10.1 12.9 16.9 7.1 3-2.5 4.1-5.4 2.1-5.4-.5 0-2 1.1-3.4 2.5-2.4 2.4-5.8 3.1-9 1.9-2.9-1.1-1.7-2.3 5.5-6l7.1-3.5-2.7-2.9c-3.1-3.2-6.1-4.1-9.6-2.8zm6.9 4.1c.9 1-.1 1.9-4.4 4-3 1.5-5.7 2.7-5.9 2.7-1.2 0-.3-4.5 1.2-6.2 1.9-2.1 7.5-2.4 9.1-.5zM141.6 57.9c-1 1.6.6 4.2 2.3 3.9.9-.2 1.7-1.3 1.9-2.6.3-1.6-.2-2.2-1.7-2.2-1.1 0-2.2.4-2.5.9zM212.7 66.5c-5.4 6.2-6.7 8.3-6.7 11 0 6 7.8 12.5 13.2 11.1 2.5-.6 4.9-2.6 11.8-9.9 3.5-3.8 4.2-4.9 3.1-5.9-1-1.1-2.5 0-7.5 5.4-4.6 5-7 6.8-8.9 6.8-3.9 0-5.6-1-7.3-4.1-1.9-3.7-.9-5.6 6.5-13.4 4.7-4.9 5.2-5.8 3.9-7.1-1.2-1.3-2.3-.5-8.1 6.1zM80.6 67.5c-1.4 1.3-2.6 3.4-2.6 4.6 0 1.6-.3 1.9-1.3 1.1-.7-.7-1.8-.7-2.7-.2-1.8 1.1 15.4 21.2 17.6 20.3 2-.8 1.8-1.6-1.6-4.8-3.6-3.5-3.8-4.5-.7-4.5 3.7 0 7.7-4.9 7.7-9.4 0-8.3-10.3-12.8-16.4-7.1zm10.9 3c1.4 1.3 2.5 3.3 2.5 4.5 0 2.7-4.3 7-7 7-2.6 0-7-4.3-7-6.8 0-3 3.8-7.2 6.6-7.2 1.4 0 3.6 1.1 4.9 2.5zM238 87.6c-1.4 3.6-2.8 6.8-3.1 7-.3.2-3.9-.1-8-.5-4.1-.5-7.5-.7-7.7-.6-.1.1 0 .9.3 1.8.5 1 2.7 1.7 7.5 2.2l6.9.7-2.5 5.6c-2.2 5-2.5 9.2-.6 9.2.4 0 2-3.3 3.6-7.4 2.1-5.5 3.2-7.3 4.4-7 1 .1 4.5.5 7.9.8 6.1.6 6.3.5 5.1-1.4-1.1-1.7-2.4-2-7.5-2H238l2.5-5.7c2.3-5.1 2.6-9.3.6-9.3-.3 0-1.8 3-3.1 6.6zM65.2 84.6c-5.9 4.1-6.3 11.4-1 15.9 5.6 4.7 13.4 2.3 15.8-4.9 2.7-8.4-7.5-16.1-14.8-11zm9.2 3.5c3.2 2.5 3.5 7 .6 9.9-2.6 2.6-5.1 2.5-8.4-.1-3.2-2.5-3.5-7-.6-9.9 2.6-2.6 5.1-2.5 8.4.1zM46.3 99.7c-.4 1-.1 1.9.6 2.1.7.2 6.2 2.9 12.3 5.9 8.5 4.1 11.3 5.1 11.9 4.1 1.3-2 1.1-2.3-1.8-3.5-1.6-.6-7.2-3.1-12.6-5.7-8.5-4-9.9-4.4-10.4-2.9zM52.4 113c-3.1 1.2-5.4 4.9-5.4 8.8 0 4.4 1.4 6.8 5 8.7 4.4 2.3 7.8 1.9 11-1.4 3.3-3.2 4.5-6.9 3.6-10.7-.8-3.1-3.2-2.6-2.8.7.4 3.5-1.6 7.5-4.5 8.8-1.4.6-2.8 1-3 .7-.2-.2.6-3.6 1.8-7.6 1.8-6 1.9-7.4.8-8.1-1.7-1.1-3.7-1-6.5.1zm4.6 2.7c0 .5-.8 3.4-1.8 6.6-1.8 5.5-1.9 5.7-3.5 3.9-1.8-1.9-2.2-5.9-.9-7.8 1.4-2.2 6.2-4.2 6.2-2.7zM254.5 119.5c-.5.2-5.3 1.1-10.6 2l-9.6 1.6 1.3 6.9c.7 3.8 1.8 7.8 2.3 8.9 3.7 6.8 13.5 8.3 19.5 3.1 4.3-3.8 5.1-7.2 3.6-16-1-6.2-1.4-7-3.3-6.9-1.2 0-2.6.2-3.2.4zm3.8 8.5c.3 2.8.2 6.1-.3 7.4-1.2 3.3-5.8 6.6-9.1 6.6-4 0-8.7-4.4-9.5-8.8-.3-2-.8-4.4-1-5.4-.4-1.3 1-1.9 7.3-3.1 12.3-2.4 11.9-2.5 12.6 3.3zM44 133.8c0 1.2 2.3 2.9 7.7 5.6l7.6 3.8-7.4 2.5c-7.2 2.4-10.4 4.7-9.3 6.5.3.4 1 .5 1.7.1.6-.3 4.9-2.1 9.6-3.8 11.9-4.4 11.9-5.6-.4-11.8-8.1-4-9.5-4.5-9.5-2.9zM244.3 148.8c-3.4.5-7.3 5.8-7.3 9.8 0 4.5 1.6 7.5 3.5 6.8 1.1-.5 1.2-1.1.5-2.4-1.6-3-1.2-6.8 1-9 3.6-3.6 4.3-2.6 3.5 6-.7 7.7-.6 8 1.4 8 6.1 0 10.9-6 9.6-11.8-1-5-6.6-8.3-12.2-7.4zm8.7 6.3c1.6 2.8 1.2 4.8-1.5 7.4-4.2 4.3-4.6 3.4-2.9-7.2.5-3.5 2.6-3.6 4.4-.2zM48.8 155.6c-5.4 2.9-6.4 9.3-2.2 14.3 2.2 2.6 3.3 3.1 6.9 3.1 6.4 0 10-3.3 10-9.2 0-5.5-2.9-10.5-5.1-8.8-1.2 1-1.1 1.6.6 3.7 2.6 3.4 2.5 5.6-.4 8.9l-2.3 2.8-1.2-6.5c-.6-3.6-1.1-7.3-1.1-8.2 0-2.1-1.6-2.1-5.2-.1zm3.8 8.4c.9 5.4.8 6-.7 6-4 0-6.3-7.4-3.3-10.4 2.5-2.5 3-2 4 4.4zM235.5 170.7c-1 1.5-2 4.6-2.3 6.9-.4 3.7-.1 4.4 2.2 5.9 3.4 2.3 5.1 1.5 8.4-4 3.2-5.4 5.8-5.7 5.5-.6 0 1.8-.8 4-1.7 5-1.6 1.8-1.2 3.1.9 3.1 1.4 0 4.5-6.3 4.5-9.3 0-2.7-1.8-5.2-4.2-6-2.2-.8-6.2 2.5-7.8 6.3-.8 1.9-1.9 3-2.9 2.8-2.5-.5-2.5-4.7-.1-8 1.9-2.6 2-4.8.1-4.8-.5 0-1.7 1.2-2.6 2.7zM52.3 178c-4.2 2.2-7.3 6.8-7.3 10.9 0 2.2 4.5 13.9 5.9 15.4.4.4 6-1.6 12.4-4.4l11.6-5.2-3.7-7c-5.7-10.8-11.1-13.6-18.9-9.7zm11.3 3.8c2.4 1.9 6.9 10.1 6 11-.3.3-4.3 2.2-8.9 4.2l-8.3 3.7-1.7-4.1c-.9-2.3-1.7-5.8-1.7-7.8 0-6.9 9.2-11.4 14.6-7zM229.4 186.5c-.8 2-1.4 1.5 8.4 6.4 6.9 3.5 8.3 3.9 8.8 2.6.8-2 1.4-1.5-8.4-6.4-6.9-3.5-8.3-3.9-8.8-2.6zM218.8 192.1c-4.5 3.6-6.7 9.4-4.9 12.8.7 1.2 4.8 4.9 9.3 8.2 6.4 4.7 8.3 5.7 9.4 4.8 1.2-1 1.1-1.4-.3-2.5-1.7-1.3-1.7-1.3.3-1.4 2.6 0 6-3.6 6.9-7.3 1.5-6-4.9-12.6-10.9-11.1-3.9.9-7.6 5.2-7.6 8.7 0 2.9 0 3-2 1.2-1.1-1-2-3-2-4.5 0-2.9 4.3-8 6.7-8 1 0 1.3-.6.9-1.6-.3-.9-.6-1.8-.6-2 0-1.1-1.9-.1-5.2 2.7zm15.6 8.4c1.2.9 1.9 2.7 1.9 4.5 0 6.6-7.3 9.4-11.2 4.3-4.8-6 3.1-13.5 9.3-8.8zM250.4 196.5c-.7 1.8.3 3.5 2.1 3.5s2.6-2.5 1.2-3.9c-1.5-1.5-2.7-1.4-3.3.4zM75.4 209.8c-2.8 2.2-4.4 5.4-4.4 8.6 0 3.5 4.6 8.6 7.8 8.6 2.6 0 2.6 0-1.3 4-3.1 3.2-3.6 4.3-2.7 5.2 1 1 3.3-.8 10.9-8.5 7.5-7.4 9.5-9.9 8.6-10.8-.9-.9-1.5-.9-2.6 0-1.2.9-1.4.7-1.4-1.6 0-6-9.9-9.6-14.9-5.5zm10.4 3.2c1.2 1.2 2.2 3.2 2.2 4.6 0 2.8-4.1 7.4-6.5 7.4-4.8 0-8.4-5.4-6.3-9.3 2.6-4.9 7-6 10.6-2.7zM211.3 211.7c-.9.3.3 2.4 3.2 6 2.5 3 4.5 6.1 4.5 6.8 0 2.1-4 6.5-6 6.5-1 0-4.1-2.5-6.8-5.5-3.9-4.5-5.1-5.3-6-4.2-.9 1.1-.1 2.6 3.9 7 4.2 4.7 5.6 5.7 8.3 5.7 3.5 0 8.6-4 8.6-6.6 0-.8.6-1.1 1.5-.8 3.9 1.5 3-1.3-2.7-8.2-3.5-4-6.5-7.4-6.8-7.3-.3 0-1.1.3-1.7.6zM96.5 223c-.3.6.2 1.3 1.2 1.6 5.7 1.9 7.2 2.9 8.3 5.4 2 4.9.3 5.1-6.5.9-3.5-2.3-6.8-3.8-7.4-3.5-1.6 1-2.3 6.1-1.2 8.9 1.5 3.8 6.8 6.9 10.6 6.2 6.7-1.2 10.7-9.9 6.9-15.3-2.8-4-10.4-6.7-11.9-4.2zm3.6 11.2 5.1 3.1-2.5 1.4c-3.4 1.7-7.4.2-8.7-3.3-.9-2.3-.6-4.4.5-4.4.3 0 2.8 1.4 5.6 3.2zM186.8 228.6c-3.7 1.9-5.5 5.2-3.3 6 1 .4 2.3-.4 3.6-2 2.3-2.9 7.8-3.6 9.8-1.3.8 1.1-.4 2.1-5.9 4.7-3.9 1.9-7 3.6-7 3.8 0 1.7 2.8 4.6 5.5 5.8 8.3 3.4 16.2-5.4 12.1-13.4-.9-1.7-2.5-3.6-3.5-4.2-2.8-1.4-8.1-1.2-11.3.6zm12.1 10.8c-1.4 2.9-4.6 4.2-8.4 3.2-3.7-.9-3.1-1.9 2.8-4.8 5.8-2.9 7.4-2.4 5.6 1.6zM113.8 243.4c-3.8 6.3-6.8 11.7-6.8 12 0 .3.8.6 1.8.6 1.2 0 3.5-3.2 7.2-9.7l5.5-9.7 1.2 10.7c1.8 16.2 2.6 16.4 10.3 3.2l5.5-9.4.7 4.2c.3 2.3.9 7.2 1.3 10.9.5 4.7 1.1 6.8 2.2 7.2.9.4 1.7.5 1.8.4.4-.4-2.3-25-2.9-26.5-1.2-3-3.8-.7-8.8 7.7-2.9 4.9-5.6 9-5.9 9-.4 0-1-4.7-1.4-10.5-.4-5.8-1.1-10.5-1.5-10.5-.5 0-1.4-.2-2.2-.5-.8-.3-3.7 3.6-8 10.9zM175.2 232.9c-1.1.7-1 1.8.3 6.4 1.9 6.6 1.4 9-2 10.5-1.6.7-2.3 1.7-1.9 2.7.9 2.2 2.2 1.9 4.9-1.1 1.9-2.1 2.5-2.3 2.5-1 0 .9.7 1.6 1.5 1.6 2 0 1.9-.7-.7-10.4-2.4-9.1-2.8-9.8-4.6-8.7zM152.4 237.5c-.4.9-.2 2.1.4 2.7 1.5 1.5 4.4.1 4-1.9-.4-2.3-3.6-2.9-4.4-.8z" />
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>

  
);

// HTML Icon
export const HtmlIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 128 128"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="#E44D26" d="M19 0l9 101 46 13 46-13 9-101H19z" />
    <path fill="#F16529" d="M64 117l36-10 7-79H64z" />
    <path fill="#EBEBEB" d="M64 53H35l-2-23h31V7h-51l3 33h18v13z" />
    <path fill="#FFF" d="M64 53v-13h20l-2 13H64z" />
  </svg>
);

// CSS Icon
export const CssIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 128 128"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="#1572B6" d="M19 0l9 101 46 13 46-13 9-101H19z" />
    <path fill="#33A9DC" d="M64 117l36-10 7-79H64z" />
    <path fill="#FFF" d="M64 53H35l-2-23h31V7h-51l3 33h18v13z" />
    <path fill="#EBEBEB" d="M64 53v-13h20l-2 13H64z" />
  </svg>
);

// JavaScript Icon
export const JavaScriptIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <rect width="128" height="128" fill="#F7DF1E" />
    <text
      x="64"
      y="88"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="48"
      fill="#000"
    >
      JS
    </text>
  </svg>
);

// NodeJS Icon
export const NodeJSIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <rect width="128" height="128" fill="#68A063" />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fill="#FFF"
    >
      Node
    </text>
  </svg>
);

// NextJS Icon
export const NextJSIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <rect width="128" height="128" fill="#000" />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fill="#FFF"
    >
      Next
    </text>
  </svg>
);

// Bootstrap Icon
export const BootstrapIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <rect width="128" height="128" fill="#563D7C" />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fill="#FFF"
    >
      BS
    </text>
  </svg>
);

// ReactJS Icon
export const ReactIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <circle cx="64" cy="64" r="60" fill="none" stroke="#61DAFB" strokeWidth="8" />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fill="#61DAFB"
    >
      React
    </text>
  </svg>
);

// MongoDB Icon
export const MongoDBIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#589636"
      d="M64 0C40 0 24 16 24 16s-8 20 0 20c8 0 8-4 16-4 8 0 8 4 16 4s0-20 0-20S88 0 64 0z"
    />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fill="#FFF"
    >
      Mongo
    </text>
  </svg>
);

// Tailwind Icon
export const TailwindIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#06B6D4"
      d="M64 0c-22 0-32 16-32 16s10 16 32 16 32-16 32-16-10-16-32-16zM32 48s10 16 32 16 32-16 32-16-10-16-32-16-32 16-32 16zM0 96s10 16 32 16 32-16 32-16-10-16-32-16-32 16-32 16z"
    />
    <text
      x="64"
      y="120"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fill="#FFF"
    >
      TW
    </text>
  </svg>
);

// SQL Icon
export const SqlIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <rect width="128" height="128" fill="#00758F" />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="24"
      fill="#FFF"
    >
      SQL
    </text>
  </svg>
);

// Python Icon
export const PythonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="#306998" d="M64 0C40 0 24 16 24 16v32h40V0z" />
    <path fill="#FFD43B" d="M64 128c24 0 40-16 40-16v-32H64v48z" />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fill="#FFF"
    >
      Py
    </text>
  </svg>
);

// API Integration Icon
export const ApiIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <circle cx="64" cy="64" r="60" fill="#4F46E5" />
    <text
      x="64"
      y="80"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fill="#FFF"
    >
      API
    </text>
  </svg>
);

// Web Design Icon
export const WebDesignIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    width="1em"
    height="1em"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path
      fill="#000"
      d="M10 118l108-108c4-4 4-10 0-14L104 0c-4-4-10-4-14 0L0 90c-4 4-4 10 0 14l16 16c4 4 10 4 14 0z"
    />
    <text
      x="64"
      y="100"
      textAnchor="middle"
      fontFamily="Arial, sans-serif"
      fontSize="18"
      fill="#FFF"
    >
      WD
    </text>
  </svg>
);

