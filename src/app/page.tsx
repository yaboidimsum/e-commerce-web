import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Reviews } from "@/components/Reviews";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, BadgeCheck, Check, Star } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#F9F6EE" }}>
      <section>
        <MaxWidthWrapper className="lg: grid  pb-24 pt-10 sm:pb-32 lg:grid-cols-3 lg:gap-x-0 lg:pb-52 lg:pt-24 xl:gap-x-8 xl:pt-32">
          <div className="col-span-2  px-6 lg:px-0 lg:pt-4">
            <div className="relative mx-auto flex flex-col items-center text-center lg:items-start lg:text-left">
              <h1 className="relative mt-16 w-fit text-balance text-6xl font-bold !leading-tight tracking-tight text-[#343434] md:text-6xl lg:text-7xl">
                Your Image on a{" "}
                <span className="bg-red-500 px-2 text-white">Custom</span>
                Print Tees
              </h1>
              <p className="mt-8 max-w-prose text-balance text-center text-lg md:text-wrap lg:pr-10 lg:text-left">
                Create your perfect tee by customizing it with your own images.{" "}
                <span className="font-semibold">
                  Showcase your unique style
                </span>{" "}
                and make a statement with personalized designs that reflect your
                personality. Whether it is a{" "}
                <span className="font-semibold">
                  photo, graphic, or logo, bring your vision to life{" "}
                </span>{" "}
                on a tee that’s exclusively yours.
              </p>
              <ul className="mt-8 flex flex-col items-center space-y-2 text-left font-medium sm:items-start">
                <div className="space-y-2">
                  <li className="flex items-center gap-1.5 text-left">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-red-600" />
                    Crafted from premium, high-quality material.
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-red-600" />
                    Backed by a 1-year print guarantee.
                  </li>
                  <li className="flex items-center gap-1.5 text-left">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-red-600" />
                    Available in sleek monochrome colors
                  </li>
                </div>
              </ul>
              <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
                <div className="flex -space-x-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/custom/users/user-1.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/custom/users/user-7.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/custom/users/user-2.png"
                    alt="user image"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-slate-100"
                    src="/custom/users/user-6.png"
                    alt="user image"
                  />
                </div>
                <div className="flex flex-col items-center justify-between sm:items-start">
                  <div className="flex gap-0.5">
                    <Star className="h-5 w-5 fill-red-400 text-red-400" />
                    <Star className="h-5 w-5 fill-red-400 text-red-400" />
                    <Star className="h-5 w-5 fill-red-400 text-red-400" />
                    <Star className="h-5 w-5 fill-red-400 text-red-400" />
                    <Star className="h-5 w-5 fill-red-400 text-red-400" />
                  </div>
                  <p className="font-semibold">
                    <span className="font-bold text-red-500">
                      +1.500 SOL.ID
                    </span>{" "}
                    <span className="font-semibold"></span> squadrons has
                    reached the stars!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-full mt-32 flex h-fit w-full justify-center px-8 sm:px-16 md:px-0 lg:col-span-1 lg:mx-0 lg:mt-20">
            <div className="relative md:max-w-xl">
              <img src="/custom/landing-tees.png" />
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Value Proposition Section */}
      <section className="py-24">
        <MaxWidthWrapper className="flex flex-col items-center gap-16 sm:gap-32">
          <div className="flex flex-col items-center gap-4 sm:gap-6 lg:flex-row">
            <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
              What our{" "}
              <span className="relative px-2 text-red-500">squadrons </span>
              say
            </h2>
            <img
              src="/custom/customer-plane.png"
              alt="Snake"
              className="order-0 w-40 lg:order-2"
            />
          </div>
          {/* Comment Start */}
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="flex-auto flex-col gap-4 pr-8 lg:flex xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-red-600 text-red-600"
                  />
                ))}
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;TI recently ordered some custom prints and I am thrilled
                  with the quality! The prints are crafted from premium,
                  high-quality material, making them feel luxurious and durable
                  . Plus, knowing they are backed by a 1-year print guarantee
                  gives me great peace of mind.{" "}
                  <span className="bg-red-500 p-0.5 text-white">
                    The sleek monochrome colors are just perfect for my
                    minimalist decor. Highly recommend!
                  </span>{" "}
                  .&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/custom/users/user-1.png"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jonathan</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-red-500" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto flex-col gap-4 pr-8 lg:flex xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot; The custom printing service is top-notch! I love that
                  the prints are crafted from premium materials; it makes them
                  feel so much more{" "}
                  <span className="bg-red-500 p-0.5 text-white">
                    durable and worth the investment.{" "}
                  </span>{" "}
                  .&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/custom/users/user-2.png"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Josephina</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-red-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto flex-col gap-4 pr-8 lg:flex xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;Fantastic service and incredible prints! The quality of
                  the material used is superb, giving the prints a premium feel.{" "}
                  <span className="bg-red-500 p-0.5 text-white">
                    I opted for the sleek monochrome colors, and they are
                    absolutely stunning.
                  </span>{" "}
                  .&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/custom/users/user-3.png"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jeje Nole</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-red-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-auto flex-col gap-4 pr-8 lg:flex xl:pr-20">
              <div className="mb-2 flex gap-0.5">
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
                <Star className="h-5 w-5 fill-red-600 text-red-600" />
              </div>
              <div className="text-lg leading-8">
                <p>
                  &quot;The prints I ordered are simply amazing! Crafted from
                  high-quality materials,{" "}
                  <span className="bg-red-500 p-0.5 text-white">
                    they have a luxurious feel that I love!.
                  </span>{" "}
                  .&quot;
                </p>
              </div>
              <div className="mt-2 flex gap-4">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="/custom/users/user-5.png"
                  alt="user image"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">Jeje Nole</p>
                  <div className="flex items-center gap-1.5 text-zinc-600">
                    <Check className="h-4 w-4 stroke-[3px] text-red-600" />
                    <p className="text-sm">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Comment Ends */}
          </div>
        </MaxWidthWrapper>
        <div className="pt-16">
        <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl sm:text-center">
              <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                <span className="relative text-red-500">Squadrons</span>{" "}
                custom buying!
              </h2>
            </div>
          </div>
          <Reviews />
        </div>
      </section>
      <section>
        <MaxWidthWrapper className="py-24">
          <div className="mb-12 px-6 lg:px-8">
            <div className="mx-auto max-w-7xl sm:text-center">
              <h2 className="order-1 mt-2 text-balance text-center text-5xl font-bold !leading-tight tracking-tight text-gray-900 md:text-6xl">
                Get your{" "}
                <span className="relative text-red-500">custom print tees</span>{" "}
                and become{" "}
                <span className="relative text-red-500">our squadrons</span> now
              </h2>
            </div>
          </div>

          <div className="mx-auto max-w-6xl  px-6 lg:px-8">
            <div className="relative flex grid-cols-2 flex-col items-center gap-40 md:grid md:items-center md:justify-center">
              <div className="relative h-80 w-full max-w-sm rounded-xl bg-gray-900/5 ring-inset ring-gray-900/10 md:h-full md:justify-self-end lg:rounded-2xl ">
                <img
                  src="/custom/original-print.png"
                  className="h-full w-full rounded-md bg-white object-cover shadow-2xl ring-1 ring-gray-900/10"
                />
              </div>
              <div className="relative h-80 w-full max-w-sm rounded-xl  md:h-full md:justify-self-end lg:rounded-2xl">
                <img src="/custom/tees-print.png" />
              </div>
            </div>
          </div>

          <ul className="mx-auto mt-12 w-fit max-w-prose space-y-2 font-medium sm:text-lg">
            <li className="w-fit">
              <BadgeCheck className="mr-1.5 inline h-5 w-5 text-red-600" />
              Crafted from premium, high-quality material.
            </li>
            <li className="w-fit">
              <BadgeCheck className="mr-1.5 inline h-5 w-5 text-red-600" />
              1-year print guarantee warranty.{" "}
            </li>
            <li className="w-fit">
              <BadgeCheck className="mr-1.5 inline h-5 w-5 text-red-600" />
              Available in sleek monochrome colors.{" "}
            </li>
            <li className="w-fit">
              <BadgeCheck className="mr-1.5 inline h-5 w-5 text-red-600" />
              Fade-resistant, even after multiple washes.
            </li>

            <div className="flex justify-center">
              <Link
                className={buttonVariants({
                  size: "lg",
                  className: "mx-auto mt-8",
                })}
                href="/configure/upload"
              >
                Create your print now <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </ul>
        </MaxWidthWrapper>
      </section>
    </div>
  );
}
