import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/josh/phone-template-dark-edges.png"
            : "/josh/phone-template-white-edges.png"
        }
        width={400}
        height={400}
        className="pointer-events-none z-50 select-none"
        alt="Phone Image"
      />
      <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover"
          width={400}
          height={400}
          src={imgSrc}
          alt="Phone Content"
        />
      </div>
    </div>
  );
};

export default Phone;
