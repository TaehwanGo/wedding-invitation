import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLElement>;
export default function Section({ className, ...props }: Props) {
  return <section className={`${"bg-white w-full"} ${className}`} {...props} />;
}
