import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";
import Image from "next/image";

interface TeesProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Tees = ({ imgSrc, className, dark = false, ...props }: TeesProps) => {
  return (
    <div
      className={cn(
        "pointer-events-none relative z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      {/* <Image
        src={
          dark
            ? "/custom/tees-custom/black-tees.png"
            : "/custom/tees-custom/blue-tees.png"
        }
        width={400}
        height={400}
        className="pointer-events-none z-50 select-none"
        alt="Tees Image"
      /> */}
      <Image
        className="object-cover"
        width={400}
        height={400}
        src={imgSrc}
        alt="Tees Content"
      />
      {/* <div className="absolute inset-0 -z-10">
        <Image
          className="object-cover"
          width={400}
          height={400}
          src={imgSrc}
          alt="Tees Content"
        />
      </div> */}
    </div>
  );
};

export default Tees;
