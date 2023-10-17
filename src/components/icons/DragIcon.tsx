import { SVGProps } from "react";

export const DragIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={props.className}
  >
    <g>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M14 18a1 1 0 102 0 1 1 0 00-2 0zM8 18a1 1 0 102 0 1 1 0 00-2 0zM14 12a1 1 0 102 0 1 1 0 00-2 0zM8 12a1 1 0 102 0 1 1 0 00-2 0zM14 6a1 1 0 102 0 1 1 0 00-2 0zM8 6a1 1 0 102 0 1 1 0 00-2 0z"></path>
      </g>
    </g>
  </svg>
);
