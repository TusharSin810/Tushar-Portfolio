import { HoverEffect } from "../ui/card-hover-effect";

export function Hover() {
  return (
    (<div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  {
    images:"/images/html-5.svg"
  },
    {
    images:"/images/html-5.svg"
  },
    {
    images:"/images/html-5.svg"
  },
    {
    images:"/images/html-5.svg"
  },
];
