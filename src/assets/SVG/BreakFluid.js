import React from "react";

function BreakFluid({ fill, className }) {
  return (
    <svg
      width="13"
      height="17"
      viewBox="0 0 13 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.38346 0.619057C6.31874 0.543522 6.2243 0.5 6.12484 0.5C6.02537 0.5 5.93093 0.543522 5.86621 0.619057C5.62468 0.901491 0 7.61517 0 10.8272C0.0180011 12.4349 0.672866 13.9699 1.82117 15.0951C2.96948 16.2204 4.51724 16.8442 6.12495 16.8298C7.73262 16.8442 9.28044 16.2204 10.4287 15.0951C11.577 13.9699 12.2319 12.435 12.2499 10.8272C12.2499 7.61517 6.62518 0.901386 6.38368 0.619057H6.38346ZM8.3196 14.9447C8.27266 14.9701 8.21991 14.983 8.16648 14.982C8.00971 14.9811 7.8738 14.8732 7.83745 14.7207C7.80111 14.5681 7.8738 14.4104 8.01336 14.339C8.66902 14.015 9.2216 13.5149 9.60919 12.8947C9.9969 12.2744 10.2042 11.5586 10.2081 10.8273C10.2081 10.6394 10.3604 10.4871 10.5484 10.4871C10.7363 10.4871 10.8886 10.6394 10.8886 10.8273C10.8852 11.6845 10.643 12.5237 10.1892 13.2511C9.73543 13.9783 9.08808 14.5647 8.31961 14.9446L8.3196 14.9447Z"
        fill={fill}
        className={className}
      />
    </svg>
  );
}

export default BreakFluid;