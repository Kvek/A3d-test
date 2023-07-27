import { SVGProps } from "react";

interface SVGElementProps extends SVGProps<HTMLOrSVGElement> {
  flip?: boolean;
  onClick?: () => void;
  isActive?: boolean;
}
export const ChevronNext = ({ flip, onClick }: SVGElementProps) => (
  <svg
    onClick={onClick}
    transform={`rotate(${flip ? 180 : 0})`}
    viewBox="0 0 66 108"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.894 107.054L0 95.1599L41.633 53.5269L0 11.894L11.894 0L65.4209 53.5269L11.894 107.054Z" />
  </svg>
);

export const ChevronFinal = ({ flip, onClick }: SVGElementProps) => (
  <svg
    onClick={onClick}
    viewBox="0 0 100 118"
    xmlns="http://www.w3.org/2000/svg"
    transform={`rotate(${flip ? 180 : 0})`}
  >
    <path d="M11.894 112.405L0 100.511L41.633 58.8784L0 17.2454L11.894 5.35146L65.4209 58.8784L11.894 112.405Z" />
    <path d="M100 0H83.1776V117.757H100V0Z" />
  </svg>
);

export const Filter = ({
  onClick,
  width,
  height,
  isActive,
}: SVGElementProps) => (
  <svg
    onClick={onClick}
    width={width}
    height={height}
    viewBox="0 0 67 69"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M65.3638 2.69C64.911 1.87497 64.2485 1.19581 63.445 0.722845C62.6415 0.249884 61.7262 0.000321217 60.7938 1.37095e-06H5.23379C4.30007 -0.000674589 3.38321 0.248627 2.5784 0.722018C1.77359 1.19541 1.11018 1.87563 0.65708 2.69203C0.203976 3.50843 -0.0223057 4.43125 0.00173412 5.36466C0.0257739 6.29806 0.299259 7.208 0.793787 8L21.8638 36.77V68.26L44.1738 59.99V36.77L65.0138 8.25L65.1838 8C65.6854 7.21169 65.9666 6.30339 65.9983 5.36956C66.0299 4.43573 65.8108 3.51047 65.3638 2.69ZM36.1638 34.13V54.42L29.8538 56.76V34.13L10.7038 8H55.3238L36.1638 34.13Z"
      fill={isActive ? "#00d1c4" : ""}
    />
  </svg>
);

export const Search = ({ width = "20", height = "20" }: SVGElementProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 96 96"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M94.342 94.341C95.319 93.364 95.805 92.085 95.805 90.806C95.805 89.527 95.319 88.245 94.342 87.271L71.206 64.134C76.61 57.191 79.548 48.709 79.548 39.772C79.548 29.148 75.411 19.161 67.9 11.648C60.385 4.136 50.397 0 39.773 0C29.149 0 19.161 4.136 11.649 11.649C4.137 19.161 0 29.148 0 39.772C0 50.395 4.137 60.383 11.65 67.896C25.958 82.207 48.542 83.3 64.131 71.202L87.272 94.341C89.223 96.295 92.389 96.295 94.342 94.341ZM69.548 39.772C69.548 47.724 66.45 55.202 60.827 60.826C49.218 72.434 30.328 72.434 18.721 60.826C13.097 55.202 10 47.724 10 39.772C10 31.819 13.097 24.343 18.721 18.72C24.345 13.095 31.821 9.997 39.774 9.997C47.726 9.997 55.204 13.095 60.827 18.718C66.45 24.343 69.548 31.819 69.548 39.772Z" />
  </svg>
);
