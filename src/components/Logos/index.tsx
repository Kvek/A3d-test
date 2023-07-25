import React, { SVGProps } from "react";
interface SVGElementProps extends SVGProps<HTMLOrSVGElement> {
  flip?: boolean;
}
export const ChevronNext = ({ flip }: SVGElementProps) => (
  <svg
    transform={`rotate(${flip ? 180 : 0})`}
    viewBox="0 0 66 108"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.894 107.054L0 95.1599L41.633 53.5269L0 11.894L11.894 0L65.4209 53.5269L11.894 107.054Z" />
  </svg>
);

export const ChevronFinal = ({ flip }: SVGElementProps) => (
  <svg
    viewBox="0 0 100 118"
    xmlns="http://www.w3.org/2000/svg"
    transform={`rotate(${flip ? 180 : 0})`}
  >
    <path d="M11.894 112.405L0 100.511L41.633 58.8784L0 17.2454L11.894 5.35146L65.4209 58.8784L11.894 112.405Z" />
    <path d="M100 0H83.1776V117.757H100V0Z" />
  </svg>
);
