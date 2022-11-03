import React from "react";

function Range({ fill, className }) {
  return (
    <svg
      width="8"
      height="17"
      viewBox="0 0 8 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.41639 16.4215L7.51968 13.3182L6.22374 12.0054L4.68921 13.5399L4.68909 3.65031L6.22362 5.18484L7.53658 3.87188L4.41624 0.768599C4.05811 0.410467 3.46142 0.410467 3.10328 0.768599L0 3.87188L1.31296 5.18484L2.84749 3.65031V13.5399L1.31296 12.0054L0 13.3183L3.10328 16.4216C3.47841 16.7795 4.05811 16.7795 4.41624 16.4214L4.41639 16.4215Z"
        fill={fill}
        className={className}
      />
    </svg>
  );
}

export default Range;
