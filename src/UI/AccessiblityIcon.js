import { motion, useTransform, useScroll } from "framer-motion";
const AccessibilityIcon = (props) => {
  return (
    <svg
      fill="#9F0505"
      width="3.5rem"
      height="3.5rem"
      viewBox="0 0 96 96"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <title />

      <g>
        <path d="M43.7578,61.7578a5.9994,5.9994,0,1,0,8.4844,8.4844l18-18a5.9979,5.9979,0,0,0,0-8.4844l-18-18a5.9994,5.9994,0,0,0-8.4844,8.4844L51.5156,42H6A6,6,0,0,0,6,54H51.5156Z" />

        <path d="M90,0H30a5.9966,5.9966,0,0,0-6,6V18a6,6,0,0,0,12,0V12H84V84H36V78a6,6,0,0,0-12,0V90a5.9966,5.9966,0,0,0,6,6H90a5.9966,5.9966,0,0,0,6-6V6A5.9966,5.9966,0,0,0,90,0Z" />
      </g>
    </svg>
  );
};
export default AccessibilityIcon;
