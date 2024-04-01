import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Props = HTMLAttributes<HTMLElement>;
export default function Section({ className, ...props }: Props) {
  return (
    <section className={twMerge("bg-white w-full", className)} {...props} />
  );
}
